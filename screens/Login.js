import React from "react";
import { StyleSheet, Platform, StatusBar, View } from "react-native";
import { Text } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={{ paddingTop: 26 }}>
        <Text
          style={{ color: "#fff" }}
          h1Style={{
            fontSize: 42,
          }}
          h1
        >
          Vamos a iniciar sesión ahora
        </Text>
        <Text
          style={{ color: "#fff" }}
          h2
          h2Style={{
            fontWeight: "normal",
            fontSize: 22,
          }}
        >
          Bienvenido otra vez a Parking, te echabamos de menos
        </Text>
        <View style={{ paddingTop: 32 }}>
          <Input label="Email" placeholder="Ingresa tu email" />
          <Input label="Contraseña" placeholder="Ingresa tu contraseña" />
        </View>
      </View>

      <View style={{ paddingBottom: 26 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            paddingBottom: 12,
          }}
        >
          <Text style={{ marginRight: 4, color: "#e0e0e0" }}>
            ¿No tienes cuenta?
          </Text>
          <Text style={{ color: "#e0e0e0", fontWeight: "bold" }}>
            Registrate ahora
          </Text>
        </View>
        <Button title="Iniciar sesión"></Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    paddingHorizontal: 22,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "space-between",
  },
});
