import { gql } from "@apollo/client";

export const GET_ROCKET_BY_ID = gql`
    query Rocket($id: ID!){
        rocket(id: $id){
            id
            description
            name
            type
        }
    }
`;