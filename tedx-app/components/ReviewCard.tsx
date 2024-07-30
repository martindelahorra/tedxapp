import React from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ReviewCard() {

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
            <Text className="font-semibold text-lg text-gray-800">
            name
            </Text>
          </View>
          <View className="flex-row">
            {renderStars()}
          </View>
        </View>
        <Text className="text-gray-600 text-sm italic text-justify">
          comentario
        </Text>
      </View>
    </View>
  );
}