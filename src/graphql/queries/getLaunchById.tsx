import { gql } from "@apollo/client";

export const GET_LAUNCH_BY_ID = gql`
  query Launch ($id: ID!){
    launch(id: $id) {
      id
      mission_id
      mission_name
      upcoming
      launch_site {
          site_id
          site_name
      }
      rocket {
          rocket {
              id
              name
          }
      }
      links {
          video_link
      }
    }
  }
`;