import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AppNavigator from "./navigators/AppNavigator";

const client = new ApolloClient({
  uri: "https://parking-app-backend-ckjzi.ondigitalocean.app/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ApolloProvider client={client}>
        <StatusBar backgroundColor="#181818" barStyle="light-content" />
        <AppNavigator />
      </ApolloProvider>
    );
  }
}
