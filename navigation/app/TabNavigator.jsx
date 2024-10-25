import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TimesheetScreen from "../../screens/TimesheetEmployeeScreen.jsx";
import SettingsScreen from "../../screens/SettingsScreen.jsx";
import EmployeesAdminScreen from "../../screens/EmployeesAdminScreen.jsx";
import { useAppState } from "../../state-management/hooks/useAppState.js";
import ClockIcon from '../../assets/images/clock.svg';
import TimeSheetIcon from '../../assets/images/timesheet.svg';
import EmployeesIcon from '../../assets/images/employees.svg';
import SettingsIcon from '../../assets/images/setting.svg';
import ClockScreen from "../../screens/ClockScreen.jsx";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    const { state } = useAppState();
    const isAdmin = state?.user?.role.name === "admin";
  
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
  
        {isAdmin && (
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