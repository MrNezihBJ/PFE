import {gql} from "@apollo/client";

export const Get_Users = gql`
  query 
  {
    findAllUser
    {
      nom
      prenom
      password
      mail
      societe
      Numero_Telephone
      role
      status
    }
  }
`;


