import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { Alert } from "react-native";
import { useMe } from "../graphql/auth/custom-hooks";
import { useCreateReservation } from "../graphql/reservations/custom-hooks";
import Button from "./Button";

const CreateReservation = ({ date, checked }) => {
  const { data: dataMe } = useMe();
  const route = useRoute();
  const [createReservation, { loading, data, error }] = useCreateReservation();

  return (
    <Button
      loading={loading}
      onPress={async () => {
        const response = await createReservation({
          variables: {
            options: {
              reservation_end: checked ? "" : date,
              user: {
                email: dataMe?.me.email,
              },
              place: {
                place_id: route.params.placeId,
              },
              reservation_starts: moment().format("YYYY-MM-DD HH:mm:ss"),
              reservation_token: "",
            },
          },
          update: (cache) => {
            cache.evict({ fieldName: "getMyActiveReservations" });
          },
        });

        if (response.data?.createReservation.errors) {
          Alert(response.data?.createReservation.errors[0].message);
        }
      }}
      title="Reservar ahora"
    ></Button>
  );
};

export default CreateReservation;
