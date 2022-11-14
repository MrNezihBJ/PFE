import { gql } from "@apollo/client";

export const Get_Rapport = gql `
query
{
  findAllRapportExistant
  {
    _id 
    NomIntervenant 
    ContenuRapport
    TitreRapport
    Exist
    createdAt
    updatedAt
    }
}`