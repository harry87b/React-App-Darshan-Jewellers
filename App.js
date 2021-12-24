import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './Screens/SignInScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import SplashScreen from './Screens/SplashScreen';
import InitialScreen from './Screens/InitialScreen';

const Stack = createNativeStackNavigator();

export default App=()=> {
  return (    
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false}} >
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Signin" component={SignInScreen}  />
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
