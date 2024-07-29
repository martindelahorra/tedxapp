import { StatusBar } from "expo-status-bar";
import React from "react";
import Footer from "@/components/Footer";
import {
  Button,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import * as Calendar from 'expo-calendar';
import { CountUp } from 'use-count-up';
import Toast from 'react-native-root-toast';
import { RootSiblingParent } from 'react-native-root-siblings';

const createCalendarEvents = async () => {
  const { status } = await Calendar.requestCalendarPermissionsAsync();
  if (status === 'granted') {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    let calendarId;

    if (calendars.length > 0) {
      calendarId = calendars[0].id;
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const eventDetails2 = {
      title: 'Evento TEDx Vitacura',
      startDate: new Date(tomorrow.setHours(18, 0, 0)),
      endDate: new Date(tomorrow.setHours(20, 0, 0)),
      timeZone: 'GMT',
      location: 'Location 2',
    };

    if (calendarId) {
      const eventId2 = await Calendar.createEventAsync(calendarId, eventDetails2);
      console.log(`Event 2 created with ID: ${eventId2}`);
    } else {
      console.log('Calendar ID is undefined');
    }
  } else {
    console.log('Calendar permission not granted');
  }
  Toast.show('The events add to your Calendar', {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
};

export default function HomeScreen({ navigation }) {  // Asegúrate de que recibe navigation
  return (
    <RootSiblingParent>
      <ScrollView className="flex-1 bg-white ">
        <View className="bg-black">
          <ImageBackground
            source={require("@/assets/images/TedxVitacura.jpg")}
            resizeMode="cover"
            className="h-96 justify-center items-center"
          >
            <View className="w-64 h-80 bg-white justify-center items-center">
              <Image
                source={require("@/assets/images/tedx-icon.png")}
                style={{
                  width: 100,
                  height: 50,
                  position: "absolute",
                  top: 35,
                  bottom: 0,
                }}
              />
              <View>
                <Text className="text-black text-xl mb-16 font-[BigShoulders] text-justify">
                  6 de Agosto Zoco Santiago
                </Text>
              </View>
              <View
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                className="absolute top-1/2 left-0 right-0 h-0.5 bg-black transform -translate-y-1/2"
              />
              <View>
                <Text className=" text-black text-l font-[Roboto] right-14 bottom-4">
                  Venta Oficial
                </Text>
              </View>
              <View className="items-center mx-10">
                <Text className="absolute text-black text-xs font-[Outfit] text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique magni deserunt consequuntur incidunt voluptates
                </Text>
              </View>
              <View>
                <TouchableOpacity className="bg-red-600 py-1 px-12 top-20">
                  <Text className="text-white text-xs">Comprar tickets</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View className="p-4">
            <Button title="Create Events in My Calendar" onPress={createCalendarEvents} color="red" />
          </View>
          <View className="flex-1 bg-white items-center justify-center p-4">
            <View className="mb-8">
              <Text className="text-red-600 text-4xl font-bold text-center">
                <CountUp isCounting end={12} duration={3.2} /> HR
              </Text>
              <Text className="text-black text-2xl font-bold mb-2">
                Inspiración
              </Text>
            </View>
            <View className="mb-8">
              <Text className="text-red-600 text-4xl font-bold ex text-center">
                <CountUp isCounting end={20} duration={3.2} />
              </Text>
              <Text className="text-black text-2xl font-bold mb-2">Speakers</Text>
            </View>
            <View className="mb-8">
              <Text className="text-red-600 text-4xl font-bold text-center">
                <CountUp isCounting end={360} duration={3.2} />min
              </Text>
              <Text className="text-black text-2xl font-bold mb-2">
                Actividades
              </Text>
            </View>
            <Image
              source={require("@/assets/images/crowdTEDX.png")}
              className="w-96 h-32 mt-4"
              resizeMode="cover"
            />
            <View className="items-center justify-center p-4">
              <Text className="text-black text-xl font-[Roboto] mb-2">
                SE PARTE
              </Text>
              <Text className="text-black text-xl font-[Roboto] mb-2">
                DE LAS IDEAS
              </Text>
              <Text className="text-black text-xl font-[Roboto] mb-10">
                QUE INSPIRAN
              </Text>
              <Text className=" text-black text-xs font-[Outfit] text-justify mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                sapiente debitis, eveniet laudantium perspiciatis doloribus
                consequuntur qui beatae voluptatem nemo praesentium nesciunt fugit
                officiis iste nam nihil! Delectus ab harum perspiciatis
                aspernatur! Similique, reprehenderit facilis illo architecto
                blanditiis deserunt quisquam fugit ea expedita, ipsam minima
                impedit nam cum. Voluptatem, earum?
              </Text>
            </View>
            <Image
              source={require("@/assets/images/divider.png")}
              className="w-3/4 h-32 mt-4"
              resizeMode="contain"
            />
            <View>
              <Text className="text-black text-2xl font-[Roboto] font-bold mb-10">
                ACREDITACIÓN PRENSA
              </Text>
              <View className="justify-center items-center">
                <TouchableOpacity className="bg-red-600 py-2 w-11/12">
                  <Text className="text-white text-xs text-center">Más Info</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
        <Footer />
      </ScrollView>
    </RootSiblingParent>
  );
}
