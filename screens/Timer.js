import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Alert, SafeAreaView, View } from "react-native";
import { Text } from "react-native-elements";
import Button from "../components/Button";

const Timer = () => {
  const navigation = useNavigation();

  const route = useRoute();

  let arrived = false;

  const { data } = route.params;

  React.useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        if (arrived) {
          return;
        }

        e.preventDefault();

        Alert.alert("Espera a que la reserva termine");
      }),

    setTimeout(function () {
      arrived = true;
      navigation.replace("CountDown");
    }, 10000)[navigation]
  );

  return (
    <>
      <SafeAreaView backgroundColor="#181818"></SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: "#181818",
          paddingHorizontal: 22,
          justifyContent: "space-between",
          paddingVertical: 26,
        }}
      >
        <View>
          <Text h1 h1Style={{ color: "white", fontWeight: "bold" }}>
            Tienes una reserva activa
          </Text>
          <Text
            h2
            h2Style={{
              color: "#fff",
              fontSize: 18,
            }}
          >
            Del lugar #{data.place.place_number}
          </Text>
        </View>
        <View>
          <Text
            h2
            h2Style={{
              color: "#fff",
              fontSize: 22,
            }}
          >
            Esperando que llegues...
          </Text>
          <Text
            h2
            h2Style={{
              color: "#fff",
              fontSize: 22,
              marginTop: 12,
              fontWeight: "bold",
            }}
          >
            Tu token es: {data.reservation_token}
          </Text>
        </View>

        <Button title="¿Como llegar?"></Button>
      </View>
    </>
  );
};

export default Timer;
