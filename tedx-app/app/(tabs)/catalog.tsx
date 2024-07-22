import react from "react";
import { View, Text, Image } from "react-native";

export default function TabThreeScreen() {
  return (
    <View className="flex-1 bg-white ">
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

  
      <View className="bg-black h-96  pt-5 pl-3.5">
        <Image
          source={require("@/assets/images/TEDxLogo.png")}
          className="w-36 h-8 "
        />
        <Text className="text-white font-[Outfit] pt-4 ">
          © 2024 Todos los derechos reservados, bajo licencia TED Conferences,
          LLC. Este evento TEDx independiente, TEDxVitacura, está organizado
          bajo licencia de TED. En línea con la misión de difundir ideas, TED ha
          establecido el programa TEDx, que comprende eventos locales
          organizados de manera autónoma. Se prohíbe estrictamente el uso de la
          marca TEDxVitacura fuera de este contexto.
        </Text>
      </View>
    </View>
  );
}
