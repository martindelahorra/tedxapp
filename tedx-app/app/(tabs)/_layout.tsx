import React, { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Image, View, Text } from "react-native";
import HomeScreen from "./index";
import TabTwoScreen from "./explore";
import TabThreeScreen from "./catalog";
import RegisterScreen from "./register";
import LoginScreen from "./login";
import ForgotPassword from "./forgotPassword";
import speakerDetail from "./[id]";
import { auth, db } from '../../firebaseConfig'; // Asegúrate de que la ruta sea correcta y de haber configurado Firestore
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore"; // Importa las funciones necesarias de Firestore

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoggedIn(!!user);
      if (user) {
        const userDoc = await getDoc(doc(db, "Login", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
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
        console.log('Usuario desconectado con éxito');
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  };

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        {isLoggedIn && (
          <View style={{ padding: 20 }}>
            <Text style={{ fontWeight: 'bold', color: "#ffffff" }}>{userName}</Text>
          </View>
        )}
        <DrawerItemList {...props} />
        {isLoggedIn && (
          <DrawerItem
            label="Cerrar Sesión"
            onPress={() => {
              handleSignOut();
              props.navigation.navigate('Iniciar Sesion');
            }}
            style={{ position: 'absolute', bottom: 20, width: '100%' }}
          />
        )}
      </DrawerContentScrollView>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerTintColor: "white",
          headerRight: () => (
            <Image
              source={require("@/assets/images/TEDxLogo.png")}
              style={{ width: 200, height: 40, marginLeft: 10 }}
            />
          ),
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Explore" component={TabTwoScreen} />
        <Drawer.Screen name="Speakers" component={TabThreeScreen} />
        {!isLoggedIn ? (
          <>
            <Drawer.Screen name="Registrarse" component={RegisterScreen} />
            <Drawer.Screen name="Iniciar Sesion" component={LoginScreen} />
          </>
        ) : null}
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
