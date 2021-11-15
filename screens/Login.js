import { Formik } from "formik";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../components/Button";
import Input from "../components/Input";
import { useLogin } from "../graphql/auth/custom-hooks";

const Login = () => {
  const [login, { loading }] = useLogin();
  return (
    <>
      <SafeAreaView backgroundColor="#181818"></SafeAreaView>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            return login({
              variables: {
                options: values,
              },
              update: (cache) => {
                cache.evict({ fieldName: "me" });
              },
            });
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <View style={{ paddingTop: 26 }}>
                <Text
                  style={{ color: "#fff" }}
                  h1Style={{
                    fontSize: 42,
                    fontWeight: "bold",
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
                  <Input
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    label="Email"
                    placeholder="Ingresa tu email"
                  />
                  <Input
                    secureTextEntry={true}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    label="Contraseña"
                    placeholder="Ingresa tu contraseña"
                  />
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
                <Button
                  loading={loading}
                  onPress={handleSubmit}
                  title="Submit"
                  title="Iniciar sesión"
                ></Button>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </>
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
