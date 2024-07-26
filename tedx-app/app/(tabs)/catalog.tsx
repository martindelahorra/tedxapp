import react from "react";
import { View, Text, Image, ScrollView, Button } from "react-native";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import MiniCard from "@/components/MiniCard";


export default function TabThreeScreen() {
  return (
    <ScrollView className="flex-1 bg-white ">
      <View className="bg-black">
        <Text className="text-pinktdx text-5xl pt-12 font-[Sans] uppercase text-center">
          Official Speakers
        </Text>

        <Text className="text-white text-xl p-3.5 font-[Outfit]  text-justify">
          We are pleased to announce that our official speakers are confirmed!
          Join us on August 6th in Santiago, Chile for a unique day at
          TEDxVitacura.
        </Text>
      </View>

      <Image
        source={require("@/assets/images/elipse.png")}
        style={{ width: "100%", height: 100 }}
      />
      { /*card Start*/}


      <View className="p-4">
         <Card /> 
      </View>
      { /*card End*/}
      <View className="pt-10 pb-10 bg-white">
        <Text className="text-deep-blue text-4xl uppercase font-[Sans] font-semibold  text-center">
          Schedules
        </Text>
        <Text className="text-pinktdx uppercase text-4xl pt-3.5 font-[Sans]  font-extrabold text-center">
          august 6 th
        </Text>
        <Image
          source={require("@/assets/images/line.png")}
          className=" mx-auto w-52 h-2"
        />
      </View>
      
      <View className="p-4">
        
        <View className="h-16 bg-pinktdx w-full flex  justify-center rounded rounded-t-3xl  ">
          <Text className="font-[Sans] text-xl text-white pl-7 uppercase ">
            Speakers Lineup
          </Text>
        </View>

      </View>

      <MiniCard/>

      <Footer />
    </ScrollView>
  );
}
