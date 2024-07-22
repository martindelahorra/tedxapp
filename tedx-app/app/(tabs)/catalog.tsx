import react from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Footer from '@/components/Footer';

export default function TabThreeScreen() {
  return (
    <ScrollView className="flex-1 bg-white ">
      <View className="bg-black">
        <Text className="text-white text-5xl pt-20 font-[Sans] uppercase text-center">
          Official Speakers
        </Text>

        <Text className="text-white text-xl p-3.5 font-[Outfit]  text-justify">
          We are pleased to announce that our official speakers are confirmed!
          Join us on August 6th in Santiago, Chile for a unique day at
          TEDxVitacura.
        </Text>
      </View>

      <Image
        source={require("@/assets/images/waves.png")}
        style={{ width: "100%", height: 100 }}
      />
      <View className="h-12">
        <Text className="text-center">Waiting info Speakers .....</Text>
      </View>
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

  
      <Footer />
    </ScrollView>
  );
}
