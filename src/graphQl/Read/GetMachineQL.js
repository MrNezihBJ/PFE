import {gql} from "@apollo/client";

export const GET_MACHINES = gql`
  query 
  {
    findAllMachine 
    {
      idMachine
      nom_Societe
      Nom_Machine
      Serial_Number
      Status
    }
  }
`

