import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Parkings from "../screens/Parkings";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
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
            <TabBarIcon name="home-outline" color={color} size={18} />
          ),
          tabBarLabel: () => null,
        }}
        name="Inicio"
        component={Home}
      />
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
    </Tab.Navigator>
  );
};

export default AppNavigator;

const TabBarIcon = (props) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
};
