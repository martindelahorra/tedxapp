import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'nativewind';
import Star from '@expo/vector-icons/Ionicons';


const ReviewInput = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const { colorScheme } = useColorScheme();

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <View className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <TextInput
        className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-md text-black dark:text-white"
        placeholder="Escribe tu comentario aquí..."
        placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
        value={comment}
        onChangeText={setComment}
        multiline
      />
      <View className="flex-row justify-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => handleStarPress(star)}
            className="mx-1"
          >
            <Star
              size={24}
              color={star <= rating ? '#FFC107' : '#D1D5DB'}
              fill={star <= rating ? '#FFC107' : 'none'}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ReviewInput;