import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClockScreen from "../screens/ClockScreen";
import TimesheetScreen from "../screens/TimesheetEmployeeScreen.jsx";
import SettingsScreen from "../screens/SettingsScreen.jsx";
import EmployeesAdminScreen from "../screens/EmployeesAdminScreen.jsx";
import TimesheetAdminScreen from "../screens/TimesheetAdminScreen.jsx";
import ShiftFormScreen from "../screens/ShiftFormScreen.jsx";
import { useAppState } from "../context/AppStateContext.js";
import Layout from "../components/Layout.jsx";
import ClockIcon from '../assets/images/clock.svg';
import TimeSheetIcon from '../assets/images/timesheet.svg';
import EmployeesIcon from '../assets/images/employees.svg';
import SettingsIcon from '../assets/images/setting.svg';

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();

function AdminStackNavigator() {
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

function TabNavigator() {
  const { state } = useAppState();
  const userRole = state?.user?.role.name;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ff0057",
        tabBarInactiveTintColor: "#777777",
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopWidth: 0,
          paddingBottom: 5,
          height: 60,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="ClockScreen"
        component={ClockScreen}
        options={{
          tabBarLabel: "Clock",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <ClockIcon width={size} fill={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Timesheet"
        component={TimesheetScreen}
        options={{
          tabBarLabel: "Timesheet",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TimeSheetIcon width={size} fill={color}/>
          ),
        }}
      />

      {userRole === "admin" && (
        <>
          <Tab.Screen
            name="EmployeesAdminScreen"
            component={EmployeesAdminScreen}
            options={{
              tabBarLabel: "Employees",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <EmployeesIcon width={size} fill={color}/>
              ),
            }}
          />
          <Tab.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Settings",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <SettingsIcon width={size} fill={color}/>
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
}

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