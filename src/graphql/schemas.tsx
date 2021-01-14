import { gql } from "@apollo/client";

export const ADD_CUSTOMER = gql`
  mutation SignUp(
    $name: String!
    $email: String!
    $password: String!
    $country: String!
    $gender: Gender!
  ) {
    signup(
      input: {
        name: $name
        email: $email
        password: $password
        country: $country
        gender: $gender
      }
    ) {
      id
      name
    }
  }
`;

export const GET_CUSTOMERS = gql`
  {
    Customers {
      ID
      FullName
      SecondName
      LastName
      FirstName
    }
  }
`;
