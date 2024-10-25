import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Layout from "../../components/Layout.jsx";
import { AdminStackNavigator } from "./AdminStackNavigator.jsx";
import { TabNavigator } from "./TabNavigator.jsx";

const RootStack = createNativeStackNavigator();

export function AppNavigator() {
    return (
      <Layout>
        <RootStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#2C2C2E",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <RootStack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
  
          <RootStack.Screen name="Time Sheet" component={AdminStackNavigator} />
        </RootStack.Navigator>
      </Layout>
    );
  }