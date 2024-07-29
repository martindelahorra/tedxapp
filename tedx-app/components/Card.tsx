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
    <View className="bg-gray-200 rounded-3xl overflow-hidden mx-2.5 my-1.5">
      <View className="flex-row justify-between items-center p-4">
        <View className="flex-1 mr-2.5">
          <View className="flex-row items-center mb-1.5">
            {/* <ChevronRight stroke="red" width={24} height={24} /> */}
            <Text className="text-lg font-bold text-black ml-1">nombre</Text>
          </View>
          <Text className="text-sm text-gray-600">descripcion</Text>
        </View>
        <Image 
        
          className="w-20 h-20 rounded-full"
        />
      </View>
    </View>
  );
}
