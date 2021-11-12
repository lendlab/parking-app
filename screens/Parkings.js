import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../components/Input";
import ParkingList from "../components/ParkingList";

const Parkings = () => {
  return (
    <>
      <StatusBar backgroundColor="#202020" barStyle="light-content" />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#181818",
        }}
      >
        <View
          style={{
            height: 220,
            backgroundColor: "#202020",
            borderBottomWidth: 1,
            borderBottomEndRadius: 8,
            borderBottomStartRadius: 8,
            borderColor: "#2a2a2a",
            paddingHorizontal: 22,
            justifyContent: "center",
          }}
        >
          <Text
            h1
            h1Style={{
              color: "#FFF",
              fontSize: 42,
              fontFamily: "Inter_900Black",
              textAlign: "center",
            }}
          >
            Parkings
          </Text>
          <Input placeholder="Busca un parking..." />
        </View>
        <ParkingList />
      </ScrollView>
    </>
  );
};

export default Parkings;

const styles = StyleSheet.create({});