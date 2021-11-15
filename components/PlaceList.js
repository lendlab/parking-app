import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useParkingPlaces } from "../graphql/places/custom-hooks";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ id, actionSheet }) => {
  const { loading, data, error } = useParkingPlaces(id);

  if (loading || !data) return <ActivityIndicator color="#fff" />;

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
