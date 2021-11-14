import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import React from "react";
import { useMe } from "../graphql/auth/custom-hooks";
import Login from "../screens/Login";

import LoggedNavigator from "./LoggedNavigator";

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
        <LoggedNavigator />
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
