import { useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import React from "react";
import Map from "../screens/Map";
import Reserve from "../screens/Reserve";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const LoggedNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={({ route }) => ({
          title: route.params.title,
          headerTitleStyle: {
            color: "#fff",
          },
          headerBackTitle: null,
          headerTintColor: "#ffffff",
          headerStyle: {
            height: 75,
            backgroundColor: "#202020",
          },
        })}
      />
      <Stack.Screen
        name="Reserve"
        component={Reserve}
        options={{
          title: "Reservar",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 42,
          },
          headerBackTitle: null,
          headerTintColor: "#ffffff",
          headerStyle: {
            height: 220,
            backgroundColor: "#202020",
            borderBottomWidth: 1,
            borderBottomColor: "#2a2a2a",
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default LoggedNavigator;
