import React from "react";
import { Text, View } from "react-native";

const OrDivider = () => {
  return (
    <View style={{ flexDirection: "row", marginTop: 12 }}>
      <View
        style={{
          backgroundColor: "#2a2a2a",
          height: 1,
          flex: 1,
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          alignSelf: "center",
          paddingHorizontal: 22,
          color: "#fff",
          fontSize: 12,
        }}
      >
        o
      </Text>
      <View
        style={{
          backgroundColor: "#2a2a2a",
          height: 1,
          flex: 1,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default OrDivider;
