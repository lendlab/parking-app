import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import Login from "./screens/Login";
import AppNavigator from "./navigators/AppNavigator";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const Stack = createStackNavigator();

export default function App() {
  const isLoggedIn = false;
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar backgroundColor="#181818" barStyle="light-content" />
        <NavigationContainer>
          {isLoggedIn ? (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
          ) : (
            <AppNavigator />
          )}
        </NavigationContainer>
      </>
    );
  }
}
