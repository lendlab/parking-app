import { gql } from "@apollo/client";

export const CREATE_RESERVATION = gql`
  mutation Mutation($options: ReservationInput!) {
    createReservation(options: $options) {
      errors {
        path
        message
      }
      reservate {
        reservation_id
        reservation_token
        reservation_starts
        reservation_end
        user {
          email
        }
        place {
          place_id
        }
      }
    }
  }
`;
