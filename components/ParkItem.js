import React from "react";
import { View } from "react-native";
import { Image, Text } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

const ParkItem = () => {
  return (
    <View
      style={{
        height: 120,
        backgroundColor: "#202020",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#2a2a2a",
        marginTop: 18,
        flexDirection: "row",
      }}
    >
      <Image
        source={{
          uri: "https://okdiario.com/img/2018/01/25/parking.jpg",
        }}
        style={{
          width: 120,
          height: 120,
          borderBottomRightRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      <View
        style={{
          padding: 12,
          flex: 1,
          marginLeft: 8,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
          }}
        ></Text>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            marginBottom: 12,
          }}
        >
          PARKING GODEANO
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Feather name="clock" size={18} color="#fff" />
          <Text
            style={{
              color: "#fff",
              marginLeft: 8,
            }}
          >
            34 minutos
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ParkItem;
