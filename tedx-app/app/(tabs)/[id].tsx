import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator , } from 'react-native';
import { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import data from '@/assets/data/data';



type RootStackParamList = {
  SpeakerDetail: { speakerId: number };
};

type SpeakerDetailRouteProp = RouteProp<RootStackParamList, 'SpeakerDetail'>;

type SpeakerDetailProps = {
  route: SpeakerDetailRouteProp;
};


export default function SpeakerDetail({ route }: SpeakerDetailProps) {

  const { speakerId } = route.params;
  const [speaker, setSpeaker] = useState<typeof data[0] | null>(null);

  useEffect(() => {
    const fetchSpeaker = () => {
    const foundSpeaker = data.find(s => s.id === speakerId);
      setSpeaker(foundSpeaker || null);
    };

    fetchSpeaker();
  }, [speakerId]);

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
        className='object-cover w-full h-96'
        />
        <View >
          <Text className='text-3xl text-pinktdx'>{speaker.name}</Text>
          <Text className='text-white text-md font-[Outfit]'>{speaker.subtitle}</Text>
        </View>

        <View>
        <Text>
            Card Review
          </Text> 
        </View>

      </View>

    </ScrollView>
  );
}

