import { gql } from "@apollo/client";

export const Creat_Machine = gql`
  mutation createMachine($CreateMachineInput: CreateMachineInput!) {
    createMachine(CreateMachineInput: $CreateMachineInput) 
    {
        Serial_Number
        nom_Societe
        Nom_Machine
        idMachine
        Status
    }
  }
`;