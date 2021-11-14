import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useParkingPlaces } from "../graphql/places/custom-hooks";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ id, actionSheet }) => {
  const { loading, data, error } = useParkingPlaces(id);

  if (loading || !data) return <Text>Loading...</Text>;

  return (
    <ScrollView>
      {data.getParkingsPlace.map(({ place }) => (
        <PlaceItem
          actionSheet={actionSheet}
          key={place.place_id}
          place={place}
        />
      ))}
    </ScrollView>
  );
};

export default PlaceList;

const styles = StyleSheet.create({});
