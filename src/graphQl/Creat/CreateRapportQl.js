import { gql } from "@apollo/client";

export const Creat_Rapport = gql`
  mutation createRapport($CreateRapportInput: CreateRapportInput!) 
  {
    createRapport(CreateRapportInput: $CreateRapportInput) 
    {    
      NomIntervenant
      ContenuRapport
    }
  }
`;