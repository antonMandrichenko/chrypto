import gql from "graphql-tag";

export const SIGN_UP = gql`
  mutation signUp(
    $username: String!
    $password: String
    $promoCode: String
    $captchaResponse: String
  ) {
    signUp(
      username: $username
      password: $password
      promoCode: $promoCode
      captchaResponse: $captchaResponse
    ) {
      user {
        id
        username
        email
        affiliateCode
      }
      token
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        id
        username
        email
        affiliateCode
      }
      token
    }
  }
`;