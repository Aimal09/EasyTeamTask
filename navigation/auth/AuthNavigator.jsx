import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import SignUpScreen from "../../screens/SignUpScreen";

const AuthStack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}