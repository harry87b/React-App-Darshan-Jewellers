import React from 'react';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './Screens/SignInScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Signin" component={SignInScreen}  />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash: {
    flex: 1,
    // Make the backgroud as a gradient color
    backgroundColor: '#aed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 24,
    color: "#000",
    marginBottom: 12
  },
  myBackground: {
    backgroundColor: '#fae',
    fontSize: 24,
    marginBottom: 20
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20
  },
  item: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 12
  },
  title: {
    fontSize: 16,
    color: "#f00"
  },
  subTitle: {
    fontSize: 12,
  }
});
