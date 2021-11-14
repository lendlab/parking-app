import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../components/Input";
import ParkingList from "../components/ParkingList";

const Parkings = () => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#202020" }}></SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text h1 h1Style={styles.title}>
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

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#181818",
  },
  container: {
    height: 220,
    backgroundColor: "#202020",
    borderBottomWidth: 1,
    borderColor: "#2a2a2a",
    paddingHorizontal: 22,
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 42,
    fontFamily: "Inter_900Black",
    textAlign: "center",
  },
});
