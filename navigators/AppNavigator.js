import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import React from "react";
import { useMe } from "../graphql/auth/custom-hooks";
import Login from "../screens/Login";
import Map from "../screens/Map";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  let isLoggedIn = false;

  const { loading, data } = useMe();

  if (loading) {
    return <AppLoading />;
  } else if (data?.me) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
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
              headerTintColor: "#ffffff",
              headerStyle: {
                height: 75,
                backgroundColor: "#202020",
              },
            })}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
