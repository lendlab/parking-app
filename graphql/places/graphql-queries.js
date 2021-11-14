import { gql } from "@apollo/client";

export const GET_PARKING_PLACES = gql`
  query GetParkingsPlace($parkingId: Int!) {
    getParkingsPlace(parking_id: $parkingId) {
      place {
        place_id
        occuped
        place_number
      }
    }
  }
`;
