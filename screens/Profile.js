import React from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import { Avatar, Text } from "react-native-elements";
import Button from "../components/Button";
import Logout from "../components/Logout";
import { useMe } from "../graphql/auth/custom-hooks";

const Profile = () => {
  const { data, loading } = useMe();

  if (loading) return <ActivityIndicator color="#fff" />;

  return (
    <>
      <SafeAreaView backgroundColor="#181818"></SafeAreaView>
      <View
        style={{
          paddingTop: 12,
          flex: 1,
          backgroundColor: "#181818",
          alignItems: "center",
          paddingHorizontal: 22,
        }}
      >
        <Avatar
          rounded
          size={120}
          containerStyle={{
            backgroundColor: "#2a2a2a",
          }}
          title={data?.me.name}
        ></Avatar>
        <Text
          h1
          h1Style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 22,
            marginTop: 12,
          }}
        >
          {data?.me.name}
        </Text>
        <Text
          h2
          h2Style={{
            color: "#fff",
            fontWeight: "normal",
            fontSize: 16,
            marginTop: 4,
            marginBottom: 22,
          }}
        >
          {data?.me.email}
        </Text>
        <Logout />
      </View>
    </>
  );
};

export default Profile;
