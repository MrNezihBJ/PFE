import { gql } from "@apollo/client";

export const Creat_Ticket = gql`
  mutation createTicket($CreateTicketInput: CreateTicketInput!) {
    createTicket(CreateTicketInput: $CreateTicketInput) 
    { 
        IdUser   
        NomUser
        NomSociete
        NomMachine
        Id_Machine
        TextProbleme
        TitreTicket
    }
  }
`;