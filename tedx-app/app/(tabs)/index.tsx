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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Calendar from "expo-calendar";
import { CountUp } from "use-count-up";
import Toast from "react-native-root-toast";
import { RootSiblingParent } from "react-native-root-siblings";
import { db } from "@/firebaseConfig";
import {
  collection,
  query,
  orderBy,
  where,
  limit,
  getDocs,
} from "firebase/firestore";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import Fontisto from "@expo/vector-icons/Fontisto";

const HomeScreen = () => {
  const [comments, setComments] = useState([]);
  const navigation = useNavigation();

  const handleReviewButtonPress = () => {
    navigation.navigate("Review");
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

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const fetchComments = async () => {
    try {
      const q = query(
        collection(db, "Comentarios"),
        where("valoracion", ">=", 4),
        orderBy("createdAt", "desc"),
        limit(10)
      );
      const querySnapshot = await getDocs(q);
      const commentsList = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          autor: data.autor || "Autor desconocido",
          charlaId: data.idCharla,
          comentario: data.comentario || "Comentario no disponible",
          valoracion: data.valoracion || 0,
          createdAt: data.createdAt || "",
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
      <ScrollView className="flex-1 bg-white">
        <View className="bg-black">
          <Text
            className="text-white text-2xl font-[Roboto] font-bold mb-10"
            style={{ marginBottom: 0, marginLeft: 10, fontSize: 15 }}
          >
            Señal en Vivo <Fontisto name="record" size={12} color="red" />
          </Text>
          <WebView
            scalesPageToFit={true}
            bounces={false}
            javaScriptEnabled
            style={{ height: 300 }}
            source={{
              html: `<iframe src="https://vimeo.com/event/4479994/embed/0a159f1bd0" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"></iframe>`,
            }}
            automaticallyAdjustContentInsets={false}
          />

          <View className="p-4 bg-white">
            <View className="justify-center items-center">
              <TouchableOpacity
                className="bg-red-600 py-2 w-11/12"
                onPress={handleReviewButtonPress}
              >
                <Text className="text-white text-xs text-center">
                  ¡Deja tu review!
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {comments.map((comment, index) => {
                if (comment.valoracion >= 4) {
                  let stars =
                    comment.valoracion === 4
                      ? [1, 2, 3, 4]
                      : comment.valoracion === 5
                      ? [1, 2, 3, 4, 5]
                      : [];

                  return (
                    <View
                      key={index}
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
                      <View>
                        <Text className="text-lg font-semibold">
                          {stars.length > 0 ? (
                            stars.map((starValue, i) => (
                              <Ionicons
                                key={i}
                                name="star"
                                size={16}
                                color="#FFC107"
                              />
                            ))
                          ) : (
                            <Text>No hay estrellas</Text>
                          )}
                        </Text>
                      </View>
                      <View className="flex-row items-center">
                        <Text>
                          <Text style={{ fontStyle: "italic", fontSize: 12 }}>
                            {`${comment.autor} `}
                          </Text>
                          <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                            {`sobre ${comment.charlaId}`}
                          </Text>
                        </Text>
                      </View>
                      <View style={styles.hr} />
                      <Text className="text-gray-600">
                        {truncateText(comment.comentario, 200)}
                      </Text>
                    </View>
                  );
                }
              })}
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
                consequuntur qui beatae voluptatem nemo praesentium nesciunt
                fugit officiis iste nam nihil! Delectus ab harum perspiciatis
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
                  <Text className="text-white text-xs text-center">
                    Más Info
                  </Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  hr: {
    width: "100%", // Ancho de la línea
    height: 0.5, // Altura de la línea
    backgroundColor: "grey", // Color de la línea
    marginTop: 5, // Espacio arriba y abajo de la línea
    marginBottom: 12,
  },
});

export default HomeScreen;
