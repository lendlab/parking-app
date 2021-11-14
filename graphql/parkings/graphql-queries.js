import { gql } from "@apollo/client";

export const GET_PARKINGS = gql`
  query GetParkings {
    getParkings {
      parking_id
      parking_name
      longitude
      latitude
    }
  }
`;
