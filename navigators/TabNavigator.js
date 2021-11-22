import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Parkings from "../screens/Parkings";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#181818",
          borderTopWidth: 1,
          borderTopColor: "#2a2a2a",
        },
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: "#fff",
        labelStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName="Parkings"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="car-sport-outline" color={color} size={18} />
          ),
          tabBarLabel: () => null,
        }}
        name="Parkings"
        component={Parkings}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-outline" color={color} size={18} />
          ),
          tabBarLabel: () => null,
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const TabBarIcon = (props) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
};
