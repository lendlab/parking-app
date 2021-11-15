import { useMutation, useQuery } from "@apollo/client";
import { CREATE_RESERVATION } from "./graphql-mutations";
import { GET_ACTIVE_RESERVATION } from "./graphql-queries";

export const useCreateReservation = () => {
  const [createReservation, result] = useMutation(CREATE_RESERVATION);

  return [createReservation, result];
};

export const useActiveReservation = () => {
  const result = useQuery(GET_ACTIVE_RESERVATION);

  return result;
};
