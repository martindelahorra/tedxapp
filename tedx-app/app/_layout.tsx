import React, { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Image, View, Text } from "react-native";
import HomeScreen from "./index";
import TabTwoScreen from "./explore";
import TabThreeScreen from "./catalog";
import RegisterScreen from "./register";
import Review from "./Review";
import LoginScreen from "./login";
import ForgotPassword from "./forgotPassword";
import speakerDetail from "./[id]";
import { auth, db } from "../../firebaseConfig"; // Asegúrate de que la ruta sea correcta y de haber configurado Firestore
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Importa las funciones necesarias de Firestore
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Sponsors from "./sponsors";

const Drawer = createDrawerNavigator();

export default function App() {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [selectedScreen, setSelectedScreen] = useState("Home");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoggedIn(!!user);

      if (user) {
        const userDoc = await getDoc(doc(db, "Login", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log(userData);

          setUserName(`${userData.name} ${userData.lastName}`);
        } else {
          setUserName(user.email); // Fallback in case user document does not exist
        }
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Usuario desconectado con éxito");
        navigation.navigate("Iniciar Sesion");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        {isLoggedIn && (
          <View style={{ padding: 20 }}>
            <Text style={{ fontWeight: "bold", color: "#ffffff" }}>
              {userName}
            </Text>
          </View>
        )}
        <DrawerItemList {...props} />
        {isLoggedIn && (
          <DrawerItem
            label="Cerrar Sesión"
            onPress={() => {
              handleSignOut();
            }}
            icon={({ color, size }) => (
              <Ionicons name="log-out-outline" color={color} size={size} />
            )}
            style={{ position: "absolute", bottom: 20, width: "100%" }}
          />
        )}
      </DrawerContentScrollView>
    );
  };

  const screenOptions = (screenName) => ({
    drawerIcon: ({ color, size }) => {
      let iconName;
      switch (screenName) {
        case "Home":
          iconName = "home-outline";
          break;
        case "Speakers":
          iconName = "people-outline";
          break;
        case "Sponsors":
          iconName = "gift-outline";
          break;
        case "Review":
          iconName = "star-outline";
          break;
        case "Registrarse":
          iconName = "person-add-outline";
          break;
        case "Iniciar Sesion":
          iconName = "log-in-outline";
          break;
        default:
          iconName = "home-outline";
      }

      const colorToUse = selectedScreen === screenName ? "white" : color;
      return <Ionicons name={iconName} size={size} color={colorToUse} />;
    },
    drawerLabelStyle: {
      color: selectedScreen === screenName ? "white" : "grey",
    },
    drawerItemStyle: {
      backgroundColor: selectedScreen === screenName ? "#d51523" : null,
    },
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerTitle: () => null,
          headerTintColor: "white",
          headerRight: () => (
            <Image
              source={require("@/assets/images/TEDxLogo.png")}
              style={{ width: 200, height: 40, marginLeft: 10 }}
            />
          ),
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={screenOptions("Home")}
          listeners={{
            focus: () => setSelectedScreen("Home"),
          }}
        />
        <Drawer.Screen
          name="Speakers"
          component={TabThreeScreen}
          options={screenOptions("Speakers")}
          listeners={{
            focus: () => setSelectedScreen("Speakers"),
          }}
        />
        <Drawer.Screen
          name="Sponsors"
          component={Sponsors}
          options={screenOptions("Sponsors")}
          listeners={{
            focus: () => setSelectedScreen("Sponsors"),
          }}
        />
        {isLoggedIn && (
          <Drawer.Screen
            name="Review"
            component={Review}
            options={screenOptions("Review")}
            listeners={{
              focus: () => setSelectedScreen("Review"),
            }}
          />
        )}
        {!isLoggedIn && (
          <>
            <Drawer.Screen
              name="Registrarse"
              component={RegisterScreen}
              options={screenOptions("Registrarse")}
              listeners={{
                focus: () => setSelectedScreen("Registrarse"),
              }}
            />
            <Drawer.Screen
              name="Iniciar Sesion"
              component={LoginScreen}
              options={screenOptions("Iniciar Sesion")}
              listeners={{
                focus: () => setSelectedScreen("Iniciar Sesion"),
              }}
            />
          </>
        )}
        <Drawer.Screen
          name="SpeakerDetail"
          component={speakerDetail}
          options={{
            drawerLabel: () => null,
            headerShown: true,
            headerTitle: "Detalles",
          }}
        />
        <Drawer.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            drawerLabel: () => null,
            headerShown: true,
            headerTitle: "Recuperar contraseña",
          }}
        />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  );
}
