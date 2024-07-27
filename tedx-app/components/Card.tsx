import react from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Footer from '@/components/Footer';
import data from '@/assets/data/data.js';


type Speaker = {
  id: number;
  name: string;
  subtitle: string;
  photo_url: any; 
};

type CardProps = {
  speaker: Speaker;
};


export default function Card({ speaker }: CardProps) {
  return (
    <ScrollView className="flex-1 bg-white ">

        <View key={speaker.id} className="rounded-lg overflow-hidden w-full max-w-md  mb-10">
          <Image
            source={speaker.photo_url}
            className=" object-cover w-full h-96"
          />
          <View className="p-4 absolute bottom-0 w-full backdrop-blur-xl bg-zinc-950/90 rounded-md ">
            <Text className="text-xl font-[Sans] text-pinktdx">
            {speaker.name}
            </Text>
            <Text className="text-white text-md font-[Outfit]">
            {speaker.subtitle}
            </Text>
          </View>
        </View>
 
    </ScrollView>
  );
}
