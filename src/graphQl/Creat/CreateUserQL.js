import { gql } from "@apollo/client";

export const Creat_User = gql`
  mutation createUser($CreateUserInput: CreateUserInput!) {
    createUser(CreateUserInput: $CreateUserInput) {

      
      nom
      password
      prenom
      mail
      Numero_Telephone
      role
      societe
      status
      
    }
  }
`;

//landingpage