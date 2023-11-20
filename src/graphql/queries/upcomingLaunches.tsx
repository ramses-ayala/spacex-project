import { gql } from "@apollo/client";

export const GET_UPCOMING_LAUNCHES = gql`
  query LaunchesUpcoming{
    launchesUpcoming {
        id
        launch_date_utc
        mission_id
        mission_name
        upcoming
        rocket {
            rocket_name
            rocket {
                id
            }
        }
    }
  }
`;