import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useColorScheme } from 'nativewind';
import Star from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, addDoc, collection } from 'firebase/firestore';
import { auth, db } from '@/firebaseConfig';

const ReviewInput = ({ charlaId = 'TedX Vitacura' }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();

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
      navigation.navigate('Iniciar Sesion');
      return;
    }

    try {
      const commentDoc = {
        autor: userName,
        comentario: comment,
        valoracion: rating,
        idCharla: charlaId,
        userId: userId,
        createdAt: new Date()
      };

      // Referencia a la colección 'Comentarios'
      const commentsCollectionRef = collection(db, "Comentarios");

      // Agregar un nuevo documento con un ID único generado automáticamente
      const docRef = await addDoc(commentsCollectionRef, commentDoc);
      
      console.log('Comentario agregado correctamente:', {
        id: docRef.id,
        ...commentDoc
      });

      setRating(0);
      setComment('');
      setSuccessMessage('Comentario enviado exitosamente!');
      setTimeout(() => setSuccessMessage(''), 6000); // Oculta el mensaje después de 6 segundos
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
    }
  };

  return (
    <ScrollView className='h-full'>
      <View className='flex-1 bg-white '>
        <View className='bg-[#141414] h-[460px]  '>
          <Image 
            source={require("@/assets/images/Estrellitasconpuntos.png")}
            className='mx-auto'
          /> 
          <View className='absolute mt-24 pl-4'>
            <Text className='text-5xl font-[Alata] text-white'>Comparte tu </Text>
            <Text className='text-5xl font-[Alata] text-pinktdx'>experiencia</Text>
            <Text className='text-2xl font-light text-white'>con nuestro equipo</Text>
          </View>
        </View>
        <View className='h-auto bottom-32 '>
          <View className="p-4 border border-gray/10  bg-white dark:bg-gray-800 rounded-lg shadow-md h-80 mx-auto w-full max-w-sm">
            <View className='mb-10'>
              <Text className='text-2xl font-[Sans]'>Deja tu comentario</Text>
              <Text className='text-base font-light text-gray'>Cuéntanos qué te ha parecido.</Text>
            </View>
            <TextInput
              className="w-full min-h-[100px] max-h-[200px] p-4 mb-4 border border-gray/10 rounded-md text-black "
              placeholder="Escribe tu comentario aquí..."
              placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
              value={comment}
              onChangeText={setComment}
              textAlignVertical='top'
              multiline
            />
            <View className="flex-row justify-start align-middle mb-4 text-left ">
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
            {/* Mostrar mensaje de éxito si existe */}
            {successMessage ? (
              <View style={styles.successMessageContainer}>
                <Text style={styles.successMessageText}>{successMessage}</Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

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

export default ReviewInput;
