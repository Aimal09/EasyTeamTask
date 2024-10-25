import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TimesheetAdminScreen from "../../screens/TimesheetAdminScreen.jsx";
import ShiftFormScreen from "../../screens/ShiftFormScreen.jsx";

const AdminStack = createNativeStackNavigator();

export function AdminStackNavigator() {
    return (
      <AdminStack.Navigator>
        <AdminStack.Screen
          name="TimesheetAdminScreen"
          component={TimesheetAdminScreen}
          options={{ headerShown: false }}
        />
        <AdminStack.Screen
          name="ShiftFormScreen"
          component={ShiftFormScreen}
          options={{ headerShown: false }}
        />
      </AdminStack.Navigator>
    );
  }