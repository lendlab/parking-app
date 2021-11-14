import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Chip, ListItem } from "react-native-elements";

const PlaceItem = ({ place, actionSheet }) => {
  const navigation = useNavigation();

  return (
    <ListItem
      onPress={() => {
        navigation.navigate("Reserve");
        actionSheet.current?.setModalVisible();
      }}
      bottomDivider
      containerStyle={{
        backgroundColor: "#181818",
        borderBottomColor: "#2a2a2a",
        borderBottomWidth: 1,
      }}
      disabled={place.occuped}
      disabledStyle={{
        opacity: 0.7,
      }}
    >
      <ListItem.Content
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <ListItem.Title style={{ color: "#fff", marginRight: 12 }}>
          Lugar #{place.place_id}
        </ListItem.Title>
        <Chip
          buttonStyle={{
            backgroundColor: place.occuped ? "red" : "green",
          }}
          title={place.occuped ? "Ocupado" : "Libre"}
        />
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
