import { View, Text, Image, ScrollView } from "react-native";


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
    <View className=" flex-1 rounded-xl min-h-20 max-h-20  bg-[#141414] pl-4 pr-4 ">
      <View className=" flex-row justify-between max-w-[400px] h-20  ">
        <View className="min-h-20 max-h-16 max-w-[230px]  border-red-500 mt-1 flex align-middle text-center ">
        <Text className="text-lg text-white font-[Sans]">{speaker.name}</Text>
        {/* <Text className="text-md font-light text-white text-left">{speaker.subtitle}</Text> */}
        </View>
      <View className="w-28 h-28 bottom-8">
      <Image 
          source={speaker.photo_url}
          className="h-28 w-28 object-cover  rounded-xl"
        />
        </View>  
     

      </View>
    </View>
  );
}
