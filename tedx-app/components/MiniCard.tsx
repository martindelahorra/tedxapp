import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity,ScrollView } from 'react-native';
import data from "@/assets/data/data";


const FilterButton = ({ title, onPress, isActive }) => (
  <TouchableOpacity
    onPress={onPress}
    className={`px-4 py-2 rounded-full mx-1 ${isActive ? 'bg-bg-red' : 'bg-bg-disabled'}`}
  >
    <Text className={`${isActive ? 'text-white' : 'text-white'}`}>{title}</Text>
  </TouchableOpacity>
);

const MiniCard = () => {
  const [filter, setFilter] = useState('A');
  const itemsPerPage = 5;

  const filterData = (items) => {
    switch (filter) {
      case 'A':
        return items.filter(item => item.time >= '09:20' && item.time < '11:00').slice(0, itemsPerPage);
      case 'B':
        return items.filter(item => item.time >= '12:30' && item.time < '15:00').slice(0, itemsPerPage);
      case 'C':
        return items.filter(item => item.time >= '15:00' && item.time < '18:40').slice(0, itemsPerPage);
      case 'D':
        return items.filter(item => item.time >= '18:40' && item.time <= '21:20').slice(0, itemsPerPage);
      default:
        return items.sort((a, b) => a.time.localeCompare(b.time)).slice(0, itemsPerPage);
    }
  };

  return (
    <View className="flex-1 p-4">
      <View className="flex-row  justify-center mb-4">
        <FilterButton title="Block A" onPress={() => setFilter('A')} isActive={filter === 'A'} />
        <FilterButton title="Block B" onPress={() => setFilter('B')} isActive={filter === 'B'} />
        <FilterButton title="Block C" onPress={() => setFilter('C')} isActive={filter === 'C'} />
        <FilterButton title="Block D" onPress={() => setFilter('D')} isActive={filter === 'D'} />
 
      </View>

      <View className=''>
        {filterData(data).map((item) => (
          <View key={item.id} className="flex-row bg-white shadow-2xl rounded-lg w-full min-w-sm p-2 mb-4 ">
            <View className="relative flex-1 h-3 w-3 top-12 left-12 z-10">
              <View className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></View>
              <View className="relative inline-flex rounded-full h-4 w-4 border-2 border-white bg-green-500"></View>
            </View>

            <Image
              source={item.photo_url}
              className="w-16 h-16 rounded-full"
            />
            <View className="justify-center ml-4 w-72">
              <Text className="text-gray-600 text-base">{item.time}</Text>
              <Text className="text-lg font-[Sans]">
                SPEAKER LINEUP # {item.id} 
              </Text>
              <Text className="text-lg text-pinktdx font-[Sans]">
                {item.name}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MiniCard;