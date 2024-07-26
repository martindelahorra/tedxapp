import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./index"; // Adjust the import according to your file structure
import TabTwoScreen from "./explore";
import TabThreeScreen from "./catalog";
import { Image } from "react-native";
import RegisterScreen from "./register";
import LoginScreen from "./login";
import speakerDetail from "./[id]";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerRight: () => (
            <Image
              source={require("@/assets/images/TEDxLogo.png")}
              style={{ width: 200, height: 40, marginLeft: 10 }} // Adjust the size and margin as needed
            />
          ), // Change this to your desired color
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Explore" component={TabTwoScreen} />
        <Drawer.Screen name="Catalog" component={TabThreeScreen} />
        <Drawer.Screen name="Registrarse" component={RegisterScreen} />
        <Drawer.Screen name="Iniciar Sesion" component={LoginScreen} />
        <Drawer.Screen 
          name="SpeakerDetail" 
          component={speakerDetail}
          options={{ 
            drawerLabel: () => null,
            headerShown: true,
            headerTitle: "Detalles",
          }}
        />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  );
}
