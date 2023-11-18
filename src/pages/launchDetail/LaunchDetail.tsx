import { useSearchParams } from "react-router-dom";

import { useQuery, gql } from '@apollo/client';


export interface ILaunchDetailProps {}

//
const GET_ROCKET_BY_ID = gql`
  query Rocket ($id: ID!){
    rocket(id: $id) {
        description
        id
        name
        wikipedia
    }
  }
`;

const LaunchDetail: React.FC<ILaunchDetailProps> = () => {

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    
    const result = useQuery(GET_ROCKET_BY_ID, {
        variables: {id}
    });

    console.log('result : ',result);
    
    return (
        <div className="">
            <h1>Launch Detail</h1>
            <p>id: {id}</p>
        </div>
    )
}

export default LaunchDetail;