import { useQuery } from "@apollo/client";
import { GET_PARKING_PLACES } from "./graphql-queries";

export const useParkingPlaces = (parkingId) => {
  const result = useQuery(GET_PARKING_PLACES, {
    variables: {
      parkingId,
    },
  });

  return result;
};
