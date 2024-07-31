import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import {
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import * as Calendar from "expo-calendar";
import { CountUp } from "use-count-up";
import Toast from "react-native-root-toast";
import { RootSiblingParent } from "react-native-root-siblings";
import { db } from '@/firebaseConfig';
import { collection, query, orderBy, where, limit, getDocs } from 'firebase/firestore';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const HomeScreen = () => {
  const [comments, setComments] = useState([]);
  const navigation = useNavigation();

  const handleReviewButtonPress = () => {
    navigation.navigate('Review');
  };

  const createCalendarEvents = async () => {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === "granted") {
      const calendars = await Calendar.getCalendarsAsync(
      Calendar.EntityTypes.EVENT
    );
      let calendarId;

      if (calendars.length > 0) {
        calendarId = calendars[0].id;
      }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

      const eventDetails2 = {
        title: "Evento TEDx Vitacura",
        startDate: new Date(tomorrow.setHours(18, 0, 0)),
        endDate: new Date(tomorrow.setHours(20, 0, 0)),
        timeZone: "GMT",
        location: "Location 2",
      };

      if (calendarId) {
        const eventId2 = await Calendar.createEventAsync(
        calendarId,
        eventDetails2
      );
        console.log(`Event 2 created with ID: ${eventId2}`);
      } else {
        console.log("Calendar ID is undefined");
      }
    } else {
      console.log("Calendar permission not granted");
    }
    Toast.show("The events add to your Calendar", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };

export default function HomeScreen() {
  // Asegúrate de que recibe navigation
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'; 
    }
    return text;
  };

  const fetchComments = async () => {
    try {
      const q = query(collection(db, "Comentarios"), where("valoracion", ">=", 4), orderBy("createdAt", "desc"), limit(10));
      const querySnapshot = await getDocs(q);
      const commentsList = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          autor: data.autor || "Autor desconocido",
          charlaId: data.idCharla,
          comentario: data.comentario || "Comentario no disponible",
          valoracion: data.valoracion || 0,
          createdAt: data.createdAt || ""
        };
      });
      setComments(commentsList);
    } catch (error) {
      console.error("Error fetching comments: ", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchComments();
    }, [])
  );

  return (
    <RootSiblingParent>
      <ScrollView className="flex-1 bg-white ">
        <View className="bg-black">
          {/* principal del landing */}

          <View className="p-4 bg-white">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {[...Array(10)].map((_, index) => (
                <View
                  className="block max-w-sm p-6 bg-white border bg-white p-4 m-2 shadow-md"
                  style={{
                    backgroundColor: "white",
                    padding: 16,
                    margin: 8,
                    borderRadius: 8,
                    shadowColor: "#000",
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <View className="flex-row items-center">
                    <Text className="text-lg font-semibold">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star name={"star"} size={12} color="#FFC107" />
                      ))}
                    </Text>
                    <Text style={{ fontStyle: "italic" }}>"Martin".</Text>
                  </View>
                  <Text className="text-gray-600">
                    Lorem ipsum dolor sit amet
                  </Text>
                </View>
              ))}
              {/* Add more cards as needed */}
            </ScrollView>
          </View>
          <View className="flex-1 bg-white items-center justify-center p-4">
            <View className="mb-8">
              <Text className="text-red-600 text-4xl font-[Alata] text-center">
                <CountUp isCounting end={12} duration={3.2} /> HR
              </Text>
              <Text className="text-black text-2xl font-[Alata] mb-2">
                Inspiración
              </Text>
            </View>
            <View className="mb-8">
              <Text className="text-red-600 text-4xl font-[Alata] ex text-center">
                <CountUp isCounting end={20} duration={3.2} />
              </Text>
              <Text className="text-black text-2xl font-[Alata] mb-2">
                Speakers
              </Text>
            </View>
            <View className="mb-8">
              <Text className="text-red-600 text-4xl font-[Alata] text-center">
                <CountUp isCounting end={360} duration={3.2} />
                min
              </Text>
              <Text className="text-black text-2xl font-[Alata] mb-2">
                Actividades
              </Text>
            </View>
            <Image
              source={require("@/assets/images/crowdTEDX.png")}
              className="w-96 h-32 mt-4 mb-4"
              resizeMode="cover"
            />
            <View className="items-center justify-center p-4">
              <Text className="text-black text-2xl font-[Outfit] font-bold mb-2">
                ÚNETE A LOS
              </Text>
              <Text className="text-red-600 text-2xl font-[Roboto] font-extrabold mb-10">
                CREADORES DEL CAMBIO
              </Text>
              {/* <Text className="text-black text-xl font-[Roboto] mb-10">
                QUE INSPIRAN
              </Text> */}
              <Text className=" text-gray text-xs font-[Outfit] text-justify font-extrabold mb-0">
                TEDx 2024 te invita a descubrir la fusión entre innovación y
                sustentabilidad que está modelando un futuro mejor. Sé testigo
                de cómo expertos visionarios presentan ideas disruptivas y
                proyectos inspiradores que están redefiniendo nuestra forma de
                vivir, trabajar y conectar con el mundo.
              </Text>
            </View>
            <Image
              source={require("@/assets/images/divider.png")}
              className="w-3/4 h-32 mt-4"
              resizeMode="contain"
            />
            <View>
              <Text className="text-black text-2xl font-[Roboto] font-bold mb-1 text-center">
                ACREDITACIÓN PRENSA
              </Text>
              <View className="justify-center items-center ">
                <TouchableOpacity className="bg-red-600 py-2 w-80 mb-3 mx-0">
                  <Text className="text-white text-sm text-center">
                    Más Info
                  </Text>
                </TouchableOpacity>
                <Text className="text-black text-xs font-[Sans] mb-10">
                  Convocatoria abierta para medios de prensa
                </Text>
              </View>
            </View>

            <View>
              <Text className="text-black text-2xl font-[Roboto] font-bold mb-1 text-center">
                POSTULACIÓN VOLUNTARIA
              </Text>
              <View className="justify-center items-center ">
                <TouchableOpacity className="bg-red-600 py-2 w-80 mb-3 mx-0">
                  <Text className="text-white text-sm text-center">
                    Más Info
                  </Text>
                </TouchableOpacity>
                <Text className="text-black text-xs font-[Sans] mb-10">
                  Proceso cerrado
                </Text>
              </View>
            </View>
            <View>
              <Text className="text-black text-2xl font-[Roboto] font-bold mb-1 text-center">
                Audiciones artísticas
              </Text>
              <View className="justify-center items-center ">
                <TouchableOpacity className="bg-red-600 py-2 w-80 mb-3 mx-0">
                  <Text className="text-white text-sm text-center">
                    Más Info
                  </Text>
                </TouchableOpacity>
                <Text className="text-black text-xs font-[Sans] mb-10">
                  Disponible desde
                </Text>
              </View>
            </View>
            <View>
              <Text className="text-black text-2xl font-[Roboto] font-bold mb-1 text-center">
                PARTNERSHIP SPONSORSHIP
              </Text>
              <View className="justify-center items-center ">
                <TouchableOpacity className="bg-red-600 py-2 w-80 mb-3 mx-0">
                  <Text className="text-white text-sm text-center">
                    Más Info
                  </Text>
                </TouchableOpacity>
                <Text className="text-black text-xs font-[Sans] mb-10">
                  Buscamos partnership que esten en la vision de TED
                </Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={require("@/assets/images/tedx.jpg")}
            resizeMode="cover"
            className="h-auto justify-center items-center"
          >
            <Text className="bg-red-600 text-3xl font-[Roboto] font-extrabold mb-2 mt-4">
              UN VIAJE
            </Text>
            <Text className="text-white text-2xl font-extrabold mb-4  font-[Sans]">
              TRANSFORMADOR
            </Text>
            {/* <Text className="text-white text-2xl font-bold mb-6">
              TRANSFORMADOR
            </Text> */}
            <Text className="text-white text-xs  text-justify font-[Sans] mb-10 mx-4">
              Te damos la bienvenida a TEDx 2024, donde la magia de TED se
              fusiona con la vibrante energía de nuestra comunidad. Esta
              conferencia es más que un evento; es un viaje cautivador que
              transformará tu perspectiva y despertará tu imaginación.
              Experimentarás momentos electrizantes que desafiarán los límites
              de la mente y el alma. Las charlas profundas y conmovedoras
              dejarán una huella duradera en tu ser. Pero no es solo sobre las
              charlas; se trata de compartir ideas que cambian el mundo y a tí.
            </Text>
          </ImageBackground>

          <StatusBar style="auto" />
        </View>
        <Footer />
      </ScrollView>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  hr: {
    width: '100%', // Ancho de la línea
    height: .5, // Altura de la línea
    backgroundColor: 'grey', // Color de la línea
    marginTop: 5, // Espacio arriba y abajo de la línea
    marginBottom: 12,
  },
});

export default HomeScreen;
