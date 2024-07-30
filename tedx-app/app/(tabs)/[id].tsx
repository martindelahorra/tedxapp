import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator, Linking} from 'react-native';
import { useEffect, useState } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import data from '@/assets/data/data';



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
    });
    if (url) {
      Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
    }
  };

  if (!speaker) {
    return (
      <View >
        <ActivityIndicator size="large" color="#FF0080" />
      </View>
    );
  }

  return (
    <ScrollView >
      <View className='flex-1'>
        <Image
        source={speaker.photo_url}
        className='w-full h-70 rounded-lg mb-4'
        />
        <View className='p-4 border rounded-lg'>
          <Text className='text-3xl text-pinktdx'>{speaker.name}</Text>
          <Text className='text-white text-md font-[Outfit] text-justify'>{speaker.subtitle}</Text>
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
        <View className="bg-white p-4 justify-center items-center">
          <TouchableOpacity className='bg-red-600 py-2 w-7/12' onPress={() => navigation.navigate('Speakers')}>
            <Text className="text-white text-xs text-center">Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}