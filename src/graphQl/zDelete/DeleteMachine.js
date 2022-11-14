import { gql } from "@apollo/client"

export const Delete_Machine = gql`
 mutation
    {
        SUPPRIMERMachine(removeMachine:id)
    }
`