import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

// function Home() {
//   const navigation = useNavigation();
//   return (
//     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//       <Text>Home Screen</Text>
//       <Button title="Go Detail" onPress={() => navigation.navigate('Detail')} />
//     </View>
//   );
// }

function Detail() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Detail Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cart" component={CartScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
