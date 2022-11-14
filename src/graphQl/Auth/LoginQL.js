import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($LoginUserInput: LoginUserInput!) {
    login(LoginUserInput: $LoginUserInput) {

      access_token
      user
      { 
        _id
        nom
        role
        mail
      }
    }
  }
`;
//_id a ajouter si on ajoute id in BACK 
