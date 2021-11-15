import { useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import React from "react";
import { useActiveReservation } from "../graphql/reservations/custom-hooks";
import Countdown from "../screens/Countdown";
import Map from "../screens/Map";
import Reserve from "../screens/Reserve";
import Timer from "../screens/Timer";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const LoggedNavigator = () => {
  const { loading, data } = useActiveReservation();

  if (loading || !data) return <AppLoading />;

  return (
    <Stack.Navigator>
      {data?.getMyActiveReservations ? (
        <>
          <Stack.Screen
            name="Timer"
            component={Timer}
            options={() => ({
              headerShown: false,
            })}
            initialParams={{ data: data.getMyActiveReservations }}
          />
          {/* <Stack.Screen
            name="CountDown"
            component={Countdown}
            options={() => ({
              headerShown: false,
            })}
            initialParams={{ data: data.getMyActiveReservations }}
          /> */}
        </>
      ) : (
        <>
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
                elevation: 0,
                shadowOpacity: 0,
              },
            })}
          />
          <Stack.Screen
            name="Reserve"
            component={Reserve}
            options={({ route }) => ({
              title: route.params.placeName,
              headerTitleStyle: {
                color: "#fff",
              },
              headerBackTitle: null,
              headerTintColor: "#ffffff",
              headerStyle: {
                height: 75,
                backgroundColor: "#202020",
                elevation: 0,
                shadowOpacity: 0,
              },
              headerBackTitle: " ",
            })}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default LoggedNavigator;
