import {gql} from "@apollo/client";

export const GET_Societe = gql`
query 
    {
        findAllSocieteexistant
         {
            _id 
            nomSociete 
            fix 
            Email 
            gouvernerat 
            adresse 
            region 
            status
        }
    }`