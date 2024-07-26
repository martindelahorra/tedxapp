import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import infoSpeaker from '@/assets/data/data';

interface Speaker {
  id: number;
  name: string;
  subtitle: string;
  photo_url: string;
  description: string;
  web: string;
  social: string;
  time: string;
}


export default function SpeakerDetail() {
  const route = useRoute();
  const router = useRouter();
  const { id } = route.params as { id: number };
  const [speaker, setSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    console.log('Speaker ID:', id);
    const foundSpeaker = infoSpeaker.find(s => s.id === id);
    console.log('Found Speaker:', foundSpeaker);
    setSpeaker(foundSpeaker || null);
  }, [id]);

  if (!speaker) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl">Speaker not found</Text>
        <TouchableOpacity
          className="mt-4 bg-pinktdx py-2 px-4 rounded"
          onPress={() => router.back()}
        >
          <Text className="text-white">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
  

  return (
    <ScrollView className="flex-1 bg-white">
      <Image source={  speaker.photo_url } className="w-full h-64 object-cover" />
      <View className="p-4">
        <Text className="text-2xl font-bold font-[Sans]">{speaker.name}</Text>
        <Text className="text-xl text-gray-500 font-[Outfit]">{speaker.subtitle}</Text>
        <Text className="mt-4 font-[Outfit]">{speaker.description}</Text>
        <Text className="mt-2 font-[Outfit]">Website: {speaker.web}</Text>
        <Text className="mt-2 font-[Outfit]">Social: {speaker.social}</Text>
        <Text className="mt-2 font-[Outfit]">Time: {speaker.time}</Text>
        <TouchableOpacity
          className="mt-6 bg-pinktdx py-2 px-4 rounded"
          onPress={() => router.back()}
        >
          <Text className="text-white text-center font-[Sans]">Back to Speakers</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
