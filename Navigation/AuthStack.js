import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../Screens/SignUpScreen";
import LoginScreen from "../Screens/LoginScreen";



const Stack = createStackNavigator();

export default function StackNavigation(){
    return (
      <Stack.Navigator>
          
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{
          headerShown: false
        }} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
          headerShown: false
        }} />

      </Stack.Navigator>
    );
  }

export { StackNavigation };