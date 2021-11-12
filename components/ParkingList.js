import React from "react";
import { View } from "react-native";
import ParkItem from "./ParkItem";

const ParkingList = () => {
  const parkings = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <View style={{ paddingHorizontal: 22, paddingTop: 22 }}>
      {parkings.map(() => (
        <ParkItem />
      ))}
    </View>
  );
};

export default ParkingList;
