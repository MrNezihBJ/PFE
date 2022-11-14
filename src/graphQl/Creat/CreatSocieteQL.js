import { gql } from "@apollo/client";

export const Creat_Societe = gql`
  mutation createSociete($CreateSocieteInput: CreateSocieteInput!) {
    createSociete(CreateSocieteInput: $CreateSocieteInput) 
    {      
            nomSociete
            fix
            Email
            gouvernerat
            region
            adresse
            status
    }
  }
`;