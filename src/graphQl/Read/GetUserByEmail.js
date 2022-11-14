import {gql} from "@apollo/client";

export const User_Email = gql`
  query 
  {
    getUserByemail ($mailt: mail!)
    {
      role
      societe 
    }
  }
`

