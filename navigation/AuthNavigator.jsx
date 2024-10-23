import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";

const AuthStack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}