import { useSearchParams, Link } from "react-router-dom";

import { useQuery } from '@apollo/client';

// queries
import { GET_ROCKET_BY_ID } from "../../graphql/queries/getRocketById";


export interface ILaunchDetailProps {}

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

            <Link to={`/`}>Go Back</Link>
        </div>
    )
}

export default LaunchDetail;