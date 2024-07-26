import react from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Footer from '@/components/Footer';
import data from '@/assets/data/data.js'

export default function no() {
  return (
    <ScrollView className="flex-1 bg-white ">
       {data.map((item)=>(
        <View key={item.id} className="  rounded-lg overflow-hidden w-full max-w-md  mb-10">
          <Image
            source={item.photo_url}
            className=" object-cover w-full h-96"
          />
          <View className="p-4 absolute bottom-0 w-full backdrop-blur-xl bg-zinc-950/90 rounded-md ">
            <Text className="text-xl font-[Sans] text-pinktdx">
            {item.name}
            </Text>
            <Text className="text-white text-md font-[Outfit]">
              {item.subtitle}
            </Text>
          </View>
        </View>
            ))}
    </ScrollView>
  );
}
