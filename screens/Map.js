import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import SeePlaces from "../components/SeePlaces";

const Map = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("No fueron dados los permisos");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      let address = await Location.reverseGeocodeAsync(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        {
          useGoogleMaps: false,
        }
      );

      setLocation(location);
      setAddress(address[0]);
    })();
  }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        initialRegion={{
          latitude: location?.coords?.latitude,
          longitude: location?.coords?.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {location && address && (
          <Marker
            coordinate={{
              latitude: location?.coords?.latitude,
              longitude: location?.coords?.longitude,
            }}
            title="Tu"
            description={`${address.street}, ${address.region}, ${address.city}, ${address.country}`}
          ></Marker>
        )}
      </MapView>

      <SeePlaces />
    </View>
  );
};

export default Map;
