import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Linking, StyleSheet } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import data from '@/assets/data/data';
import BottomSheet from '@gorhom/bottom-sheet';
import Star from '@expo/vector-icons/Ionicons';
import { useColorScheme } from 'nativewind';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, addDoc, collection } from 'firebase/firestore';
import { auth, db } from '@/firebaseConfig';

type RootStackParamList = {
  SpeakerDetail: { speakerId: number };
};

type SpeakerDetailRouteProp = RouteProp<RootStackParamList, 'SpeakerDetail'>;

type SpeakerDetailProps = {
  route: SpeakerDetailRouteProp;
};

export default function SpeakerDetail({ route }: SpeakerDetailProps) {
  const navigation = useNavigation();
  const { speakerId } = route.params;
  const [speaker, setSpeaker] = useState<typeof data[0] | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const { colorScheme } = useColorScheme();
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchSpeaker = () => {
      const foundSpeaker = data.find(s => s.id === speakerId);
      setSpeaker(foundSpeaker || null);
    };

    fetchSpeaker();
  }, [speakerId]);

  const openLink = (url: string) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("No se puede abrir la URL: " + url);
      }
    }).catch(err => console.error("Failed to open URL:", err));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const userDoc = await getDoc(doc(db, "Login", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserName(`${userData.name} ${userData.lastName}`);
        } else {
          setUserName(user.email);
        }
      } else {
        setUserName('');
        setUserId('');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = async () => {
    if (!userId) {
      console.log('Usuario no autenticado');
      return;
    }

    if (!speaker?.name) {
      console.log('El nombre del orador no está disponible');
      return;
    }

    try {
      const commentDoc = {
        autor: userName,
        comentario: comment,
        valoracion: rating,
        idCharla: speaker.name,  // Usar speaker.name como idCharla
        userId: userId,
        createdAt: new Date()
      };

      // Referencia a la colección 'Comentarios'
      const commentsCollectionRef = collection(db, "Comentarios");

      // Agregar un nuevo documento con un ID único generado automáticamente
      await addDoc(commentsCollectionRef, commentDoc);

      console.log('Comentario agregado correctamente:', {
        ...commentDoc
      });

      setRating(0);
      setComment('');
      bottomSheetRef.current?.close(); 
      setSuccessMessage('Comentario enviado exitosamente!');
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 6000); 

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const HandleComponent = () => (
    <View style={{
      width: 40,
      height: 6,
      borderRadius: 3,
      backgroundColor: '#FFFFFF', 
      alignSelf: 'center',
      marginVertical: 10
    }} />
  );

  const handleReviewButtonPress = () => {
    if (userId) {
      bottomSheetRef.current?.expand();
    } else {
      navigation.navigate('Iniciar Sesion'); 
    }
  };

  if (!speaker) {
    return (
      <View>
        <ActivityIndicator size="large" color="#FF0080" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          source={speaker.photo_url}
          className='w-full h-70 rounded-lg mb-4'
        />
        <View className='p-4 border rounded-lg'>
          <View className='flex-row justify-between items-start'>
            <View className='flex-1'>
              <Text className='text-3xl text-pinktdx'>{speaker.name}</Text>
              <Text className='text-white text-md font-[Outfit] text-justify'>{speaker.subtitle}</Text>
            </View>
            <View>
              <TouchableOpacity
                className='bg-red-600 py-2 px-4 flex-row items-center'
                onPress={handleReviewButtonPress}
              >
                <Ionicons name="chatbubble-outline" size={24} color="white" />
                <Text className="text-white text-xs text-center ml-2">Dejar Reseña</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className='bg-white p-3'>
          <Text className='text-gray-800 text-base p-3.5 font-[Roboto] text-justify'>{speaker.description}</Text>
        </View>
        <View className='bg-white p-4 flex-row justify-center space-x-4'>
          <FontAwesome name="clock-o" size={28} color="black" />
          <Text className='text-lg font-[Roboto]'>{speaker.time}</Text>
        </View>
        <View className='bg-white p-4 flex-row justify-center'>
          <TouchableOpacity
            className='flex-row items-center mb-1'
            onPress={() => openLink(speaker.web)}
            disabled={!speaker.web}
          >
            <Text className='p-4 font-[Sans]'>Web oficial</Text>
            <FontAwesome name="globe" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            className='flex-row items-center'
            onPress={() => openLink(speaker.social)}
            disabled={!speaker.social}
          >
            <Text className='p-4 font-[Sans]'>LinkedIn</Text>
            <FontAwesome name="linkedin-square" size={24} color="#0077B5" />
          </TouchableOpacity>
        </View>
        <View className="bg-white p-4 flex-row justify-between items-center">
          <TouchableOpacity className='bg-red-600 py-2 flex-1' onPress={() => navigation.navigate('Speakers')}>
            <Text className="text-white text-xs text-center">Volver</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1} 
        snapPoints={['60%']}
        backgroundStyle={{ backgroundColor: '#121212' }} 
        handleComponent={HandleComponent} 
        enablePanDownToClose={true} 
      >
        <View style={{ padding: 0 }}>
          <View className='flex-1'>
            <View className='h-[50px]'>
            </View>
            <View className='h-auto'>
              <View className="p-4 border border-gray/10 bg-white dark:bg-gray-800 rounded-lg shadow-md h-80 mx-auto w-full max-w-sm">
                <View className='mb-10'>
                  <Text className='text-2xl font-[Sans]'>Deja tu comentario sobre {speaker.name}</Text>
                  <Text className='text-base font-light text-gray'>Cuéntanos qué te ha parecido.</Text>
                </View>
                <TextInput
                  className="w-full min-h-[100px] max-h-[100px] p-4 mb-4 border border-gray/10 rounded-md text-black"
                  placeholder="Escribe tu comentario aquí..."
                  placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
                  value={comment}
                  onChangeText={setComment}
                  textAlignVertical='top'
                  multiline
                />
                <View className="flex-row justify-start align-middle mb-4 text-left">
                  <Text className='text-lg font-[Alata]'>Valoración:</Text>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity
                      key={star}
                      onPress={() => handleStarPress(star)}
                      className="mx-1"
                    >
                      <Star
                        name={star <= rating ? 'star' : 'star-outline'}
                        size={24}
                        color="#FFC107"
                      />
                    </TouchableOpacity>
                  ))}
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  className="bg-[#d51523] p-2 rounded-md"
                  disabled={!comment.trim() || rating === 0}
                >
                  <Text className="text-white text-center font-bold">Enviar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </BottomSheet>
      {successMessage ? (
        <View style={styles.successMessageContainer}>
          <Text style={styles.successMessageText}>{successMessage}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  successMessageContainer: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  successMessageText: {
    color: 'white',
    fontSize: 16,
  },
});
