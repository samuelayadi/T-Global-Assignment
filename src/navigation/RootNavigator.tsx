import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PublicationsScreen from "../screens/PublicationsScreen";
import RoosterScreen from "../screens/RoosterScreen";
import { tokens } from "../theme/tokens";
import TabBarIcon from "./tabBar/TabBarIcon";
import type { TabParamList } from "./types";

const Tab = createBottomTabNavigator<TabParamList>();

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: tokens.colors.primary,
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: {
          height: 78,
          paddingTop: 0,
          paddingHorizontal: 28,
          borderTopColor: "rgba(229,231,235,0.9)",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 10,
          fontFamily: "InterMedium",
          marginTop: 10,
        },
        tabBarIcon: ({ focused, color }) => {
          const name =
            route.name === "Home"
              ? "home"
              : route.name === "Rooster"
              ? "calendar"
              : route.name === "Publications"
              ? "doc"
              : "user";

          return <TabBarIcon name={name} color={color} focused={focused} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Rooster" component={RoosterScreen} />
      <Tab.Screen name="Publications" component={PublicationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
