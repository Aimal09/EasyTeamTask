import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppNavigator } from "./AppNavigator";
import { AuthNavigator } from "./AuthNavigator";
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