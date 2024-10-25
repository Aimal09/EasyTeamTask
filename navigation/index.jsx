import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppNavigator } from "./app/";
import { AuthNavigator } from "./auth/AuthNavigator";
import { useAppState } from "../state-management/hooks/useAppState";

const MainNavigator = () => {
    const { state } = useAppState();

  return (
    <NavigationContainer>
      {state.user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;