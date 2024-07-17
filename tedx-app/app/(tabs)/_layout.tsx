import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './index'; // Adjust the import according to your file structure
import TabTwoScreen from './explore';
import TabThreeScreen from './catalog';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Navigator
         screenOptions={{
          headerTintColor: 'white',
          headerRight: () => (
            <Image
              source={require('@/assets/images/TEDxLogo.png')}
              style={{ width: 200, height: 40, marginLeft: 10 }} // Adjust the size and margin as needed
            />
          ), // Change this to your desired color
        }}
      >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Explore" component={TabTwoScreen} />
          <Drawer.Screen name="Catalog" component={TabThreeScreen} />
          {/* Add other screens here */}
      </Drawer.Navigator>
  </GestureHandlerRootView>
  );
}