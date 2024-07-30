import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import MiniCard from "@/components/MiniCard";
import dataNobg from "@/assets/data/dataNoBg";
import Rcard from "@/components/ReviewCard"


type RootStackParamList = {
  SpeakerDetail: { speakerId: number };
};

export default function TabThreeScreen() {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
  
  const handleSpeakerPress = (speakerId: number) => {
    navigation.navigate('SpeakerDetail', { speakerId });
  };

  return (
    <ScrollView className="flex-1 bg-white ">
      <View className="bg-[#141414]">
        <Text className="text-pinktdx text-5xl pt-12 font-[Sans] uppercase text-center">
          Official Speakers
        </Text>
        <Text></Text>
        {/* <Text className="text-white text-xl p-3.5 font-[Outfit] text-justify">
          We are pleased to announce that our official speakers are confirmed!
          Join us on August 6th in Santiago, Chile for a unique day at
          TEDxVitacura.
        </Text> */}
      </View>

      {/* <Image
        source={require("@/assets/images/elipse.png")}
        style={{ width: "100%", height: 100 }}
      /> */}


    {/* card de las review */}
     {/* <Rcard /> */}
    {/* card de las review */}


 

        {/*<View className="p-4">
              <Card/>
        </View>  */}


        <View className="gap-y-10 mx-auto mt-1 ">

        {dataNobg.map((speaker) => (
          <TouchableOpacity key={speaker.id} onPress={() => handleSpeakerPress(speaker.id)}>
            <Card speaker={speaker} />
          </TouchableOpacity>
        ))}

      </View>
      
      <View className="pt-10 pb-10 bg-white">
        <Text className="text-deep-blue text-4xl uppercase font-[Sans] font-semibold text-center">
          Schedules
        </Text>
        <Text className="text-pinktdx uppercase text-4xl pt-3.5 font-[Sans] font-extrabold text-center">
          August 6th
        </Text>
        <Image
          source={require("@/assets/images/line.png")}
          className="mx-auto w-52 h-2"
        />
      </View>
      
      <View className="p-4 ">
        <View className="h-16 bg-pinktdx w-full flex justify-center rounded-t-3xl">
          <Text className="font-[Sans] text-xl text-white pl-7 uppercase">
            Speakers Lineup
          </Text>
        </View>
      </View>

    
      <View> 
          <MiniCard/>
      </View>
    </ScrollView>
  );
}
