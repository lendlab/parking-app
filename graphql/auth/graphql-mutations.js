import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($options: LoginInput!) {
    login(options: $options) {
      errors {
        path
        message
      }
      user {
        email
        name
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation Mutation {
    logout
  }
`;
