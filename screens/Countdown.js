import React from "react";
import { SafeAreaView, View } from "react-native";
import moment from "moment";
import CountDown from "react-native-countdown-component";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "react-native-elements";
import Button from "../components/Button";

const Countdown = () => {
  const route = useRoute();

  const { data } = route.params;

  return (
    <>
      <SafeAreaView backgroundColor="#181818"></SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: "#181818",
          paddingHorizontal: 22,
          paddingVertical: 26,
          justifyContent: "space-between",
        }}
      >
        <Text
          h1
          h1Style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 32,
            textAlign: "center",
          }}
        >
          Cuenta atras para que finalice tu reserva...
        </Text>
        <CountDown
          style={{}}
          digitStyle={{
            backgroundColor: "white",
          }}
          digitTxtStyle={{
            color: "black",
            fontWeight: "normal",
          }}
          timeLabelStyle={{
            color: "white",
            marginTop: 12,
          }}
          until={20000}
          onFinish={() => alert("finished")}
          onPress={() => alert("hello")}
          size={20}
          timeLabels={{ d: "dias", h: "horas", m: "minutos", s: "segundos" }}
        />
        <Button title="Quiero aumentar el tiempo..."></Button>
      </View>
    </>
  );
};

export default Countdown;
