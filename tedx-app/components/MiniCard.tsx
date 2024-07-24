import {View,Image,Text} from 'react-native'
import data from "@/assets/data/data"

const MiniCard = () => {
  return (
            
<View className="flex-1 justify-center items-center  bg-gray-100 p-4  ">
    {data.map((item)=>(
          <View key={item.id} className="flex-row text-justify bg-white shadow-2xl rounded-lg  w-full min-w-sm p-2   ">
             
          <View className="relative flex-1 h-3 w-3 top-12 left-12 z-10 ">
              <View className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></View>
              <View className="relative inline-flex rounded-full h-4 w-4 border-2 border-white bg-green-500"></View>
            </View>

            <Image
              source={item.photo_url}
              className="w-16 h-16 rounded-full"
            />
            <View className="justify-center ml-4  w-72 text-justify">
              
              <Text className="text-gray-600 text-base">{item.time}</Text>
             
              <Text className="text-lg font-[Sans]">
              SPEAKER LINEUP #{item.id} {item.name}
              </Text>
              <Text className="text-md font-[Outfit] ">By <Text className="text-red-700 font-[Sans] text-base ">{item.name}</Text> {item.subtitle}
              </Text>
            
            </View>
  
          </View>
              ))}
        </View>
  )
}

export default MiniCard