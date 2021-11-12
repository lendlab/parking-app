import React from "react";
import { Button as NativeButton } from "react-native-elements";

const Button = (props) => {
  return (
    <NativeButton
      containerStyle={{
        width: "100%",
      }}
      buttonStyle={{
        padding: 12,
        backgroundColor: "#f70050",
        borderRadius: 8,
      }}
      titleStyle={{
        fontSize: 14,
        fontWeight: "normal",
        color: "#fff",
      }}
      {...props}
    ></NativeButton>
  );
};

export default Button;
