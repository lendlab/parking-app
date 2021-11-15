import { gql } from "@apollo/client";

export const GET_ACTIVE_RESERVATION = gql`
  query GetMyActiveReservations {
    getMyActiveReservations {
      reservation_id
      reservation_starts
      reservation_token
      reservation_end
      user {
        email
        name
      }
      place {
        place_id
        place_number
        occuped
        state
      }
    }
  }
`;
