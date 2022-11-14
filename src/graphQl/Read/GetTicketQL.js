import {gql} from "@apollo/client";

export const Get_Ticket = gql`
query 
  {
    findAllTicketexistant
    {
      _id
      NomUser
      NomSociete
      NomMachine
      Id_Machine
      TextProbleme
      TitreTicket
      status1
      statusChef
      statusIntervenant
      updatedAt
      createdAt
    }
  }`
