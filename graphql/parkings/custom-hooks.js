import { useQuery } from "@apollo/client";
import { GET_PARKINGS } from "./graphql-queries";

export const useParkings = () => {
  const result = useQuery(GET_PARKINGS);

  return result;
};
