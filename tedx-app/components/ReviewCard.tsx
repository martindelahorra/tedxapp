import React from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Speaker = {
  id: number;
  name: string;
  photo_url: any;
  review: string;
  rating: number; 
};

type CardProps = {
  speaker: Speaker;
};

export default function Card({ speaker }: CardProps) {

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Ionicons
          key={i}
          name={i < rating ? "star" : "star-outline"}
          size={20}
          color="#FFD700"
        />
      ));
  };

  return (
    <View className="shadow-2xl bg-white drop-shadow-xl rounded-lg max-w-xs mx-auto">
      <View className="p-4">
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-row items-center">
            <Image
              source={require("@/assets/images/DenisseGoldfarb.png")}
              className="w-12 h-12 rounded-full mr-3"
            />
            <Text className="font-semibold text-lg text-gray-800">
            name
            </Text>
          </View>
          <View className="flex-row">
            {renderStars()}
          </View>
        </View>
        <Text className="text-gray-600 text-sm italic text-justify">
         yo opino que opinar es necesario  yo opino que opinar es necesario 
         yo opino que opinar es necesario
        yo opino que opinar es necesario  yo opino que opinar es necesario
        </Text>
      </View>
    </View>
  );
}