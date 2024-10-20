import { Clock, EasyTeamProvider } from "@easyteam/ui";
import React, { useState } from 'react';
import { Button, Text, View } from "react-native";
import Employee from "./server/models/employeeModel";
import Login from "./pages/login/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from "./pages/login/AuthProvider";
import Home from "./pages/home/Home";

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
