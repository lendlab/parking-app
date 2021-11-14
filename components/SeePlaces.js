import React, { createRef } from "react";
import ActionSheet from "react-native-actions-sheet";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import PlaceList from "./PlaceList";
import { useRoute } from "@react-navigation/native";

const actionSheetRef = createRef();

const SeePlaces = () => {
  const route = useRoute();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 26,
        width: "80%",
        alignSelf: "center",
      }}
    >
      <Button
        title="Ver lugares"
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}
      />

      <ActionSheet
        containerStyle={{
          backgroundColor: "#181818",
          borderTopWidth: 1,
          borderTopColor: "#2a2a2a",
          height: 300,
          padding: 12,
        }}
        ref={actionSheetRef}
      >
        <View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 23,
              padding: 4,
            }}
          >
            Lugares
          </Text>
          <PlaceList id={route.params.id} actionSheet={actionSheetRef} />
        </View>
      </ActionSheet>
    </View>
  );
};

export default SeePlaces;
