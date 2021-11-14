import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { useParkings } from "../graphql/parkings/custom-hooks";
import ParkItem from "./ParkItem";

const ParkingList = () => {
  const { loading, data, error } = useParkings();

  if (loading || !data) return <Text>Cargando...</Text>;

  return (
    <View style={{ paddingHorizontal: 22, paddingTop: 22 }}>
      {data.getParkings.map((park) => (
        <ParkItem park={park} />
      ))}
    </View>
  );
};

export default ParkingList;
