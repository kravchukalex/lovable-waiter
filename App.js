//import 'react-native-gesture-handler';
import * as React from 'react';
import Home from '../lovable-waiter/src/screens/Home';
//import SingleOrder from '../lovable-waiter/src/screens/Home';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <View style={{flex: 0.2, backgroundColor: '#ffffff'}} />
      <Home />
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

{
}
{
  /* <Stack.Screen name="Order" component={SingleOrder} /> */
}
