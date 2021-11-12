import React, { useState } from "react";
import { Input as NativeInput } from "react-native-elements";

const Input = (props) => {
  const [focused, setFocused] = useState(false);

  return (
    <NativeInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      containerStyle={{ paddingHorizontal: 0 }}
      inputContainerStyle={{
        borderWidth: 1,
        borderColor: focused ? "#fff" : "#444444",
        borderRadius: 8,
        paddingLeft: 12,
        marginTop: 12,
      }}
      inputStyle={{
        color: "white",
        fontSize: 12,
      }}
      placeholderTextColor="#5d5e5d"
      labelStyle={{
        fontSize: 12,
        fontWeight: "normal",
        color: "#e0e0e0",
      }}
      {...props}
    ></NativeInput>
  );
};

export default Input;
