import react from 'react';
import {View ,Text} from 'react-native';

export default function TabThreeScreen(){
  return(
  <View className='flex-1 ' >
    <View className=' bg-bg-secundary'>
      <Text className='text-white text-5xl pt-20 font-[Sans] uppercase text-center' >
        Official Speakers
      </Text>
      
      <Text className='text-white text-xl p-3.5 font-[Alata]  text-justify' >
      We are pleased to announce that our official 
      speakers are confirmed!
      Join us on August 6th in Santiago,
      Chile for a unique day at TEDxVitacura.
      </Text>

      

      
      </View>

      <View className='pt-10 bg-white'>
        <Text className='text-gray text-4xl font-[Alata] text-center'>
          Schedule
        </Text>
        <Text className='text-subtitle-spk text-lg pt-3.5 font-[Outfit] text-center'>
          10:00 AM - Opening Remarks
        </Text>
        <Text className='text-subtitle-spk text-lg pt-1.5 font-[Outfit] text-center'>
          10:30 AM - Keynote Speaker: John Doe
        </Text>
        <Text className='text-subtitle-spk text-lg pt-1.5 font-[Outfit] text-center'>
          11:30 AM - Break
        </Text>
        <Text className='text-subtitle-spk text-lg pt-1.5 font-[Outfit] text-center'>
          12:00 PM - Panel Discussion
        </Text>
        <Text className='text-subtitle-spk text-lg pt-1.5 font-[Outfit] text-center'>
          1:00 PM - Lunch
        </Text>



      </View>


  </View>

  )
}