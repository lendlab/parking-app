import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { CheckBox, Divider, Text } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Button from "../components/Button";
import moment from "moment/min/moment-with-locales";
import "moment/locale/es";
import OrDivider from "../components/OrDivider";
import CreateReservation from "../components/CreateReservation";
moment.locale("es");

const Reserve = () => {
  const handleConfirm = (date) => {
    setDatePicked({
      unformatted: moment(date, "YYYY-MM-DD HH:mm:ss").format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      formatted: moment(date, "HH:mm:ss").format(
        "[Hasta las] H:mm [del] DD/MM/Y"
      ),
    });
    hideDatePicker();
  };

  const [datePicked, setDatePicked] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [checked, setChecked] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#181818",
        paddingHorizontal: 22,
        paddingTop: 26,
      }}
    >
      <Text
        h1
        h1Style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 32,
        }}
      >
        Faltan concretar algunas cosas
      </Text>
      <Text
        h2
        h2Style={{
          color: "#fff",
          fontWeight: "normal",
          fontSize: 22,
          marginTop: 8,
          marginBottom: 26,
        }}
      >
        Estás a un solo paso...
      </Text>

      <Button
        disabled={checked}
        secondary
        title={
          datePicked
            ? datePicked?.formatted.toString()
            : "¿Hasta cuando estarás?"
        }
        onPress={showDatePicker}
      />
      <DateTimePickerModal
        disabled={checked}
        cancelTextIOS="Cancelar"
        confirmTextIOS="Aceptar"
        isVisible={isDatePickerVisible}
        mode="datetime"
        locale="en_GB"
        onConfirm={handleConfirm}
        minimumDate={new Date()}
        onCancel={hideDatePicker}
        themeVariant="light"
      />
      <OrDivider />

      <CheckBox
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          padding: 0,
          paddingLeft: 0,
          marginLeft: 0,
          marginTop: 12,
        }}
        checkedColor="#f70050"
        textStyle={{
          fontWeight: "normal",
          color: "#fff",
        }}
        onPress={() => setChecked(!checked)}
        title="Todavía no me decido"
        checked={checked}
      />
      <View
        style={{
          position: "absolute",
          bottom: 26,
          width: "100%",
          alignSelf: "center",
        }}
      >
        <CreateReservation checked={checked} date={datePicked?.unformatted} />
      </View>
    </View>
  );
};

export default Reserve;
