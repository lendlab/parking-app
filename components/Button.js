import React from "react";
import { Button as NativeButton } from "react-native-elements";

const Button = ({ secondary, ...props }) => {
  return (
    <NativeButton
      containerStyle={{
        width: "100%",
      }}
      buttonStyle={{
        padding: 12,
        backgroundColor: secondary ? "transparent" : "#f70050",
        borderRadius: 8,
        borderWidth: secondary && 1,
        borderColor: secondary && "#444444",
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
