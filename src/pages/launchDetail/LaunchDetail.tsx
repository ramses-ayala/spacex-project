import { useState, useEffect } from "react";

// apollo
import { useQuery, useLazyQuery } from '@apollo/client';

// router - dom
import { useSearchParams, Link } from "react-router-dom";

// queries
import { GET_LAUNCH_BY_ID } from "../../graphql/queries/getLaunchById";
import { GET_ROCKET_BY_ID } from "../../graphql/queries/getRocketById";

export interface IRocketInfo{
    id: string,
    description: string,
    name: string,
    type: string
}
export interface ILaunchDetailProps {}

const LaunchDetail: React.FC<ILaunchDetailProps> = () => {

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const [rocketInfo, setRocketInfo] = useState<IRocketInfo>();
    
    const  { error, loading, data } = useQuery(GET_LAUNCH_BY_ID, {
        variables: {id}
    });

    const [getRocketInfo, result] = useLazyQuery(GET_ROCKET_BY_ID);

    useEffect(() => {
        if(result.data){
            setRocketInfo(result.data.rocket);
        }
    }, [result]);



    const showRocketInfo = (id: string) => {
        getRocketInfo({variables: { id }});
    }

    if(rocketInfo){
        return(
            <div className="card text-center">
                <p>Name: {rocketInfo.name}</p>
                <p>Rocket Type: {rocketInfo.type}</p>
                <p>Description: {rocketInfo.description}</p>
                <button onClick={() => setRocketInfo(undefined)}>Go back</button>
            </div>
        )
    }
    
    if(loading) return <p>Loading...</p>;

    if(error) return <p>{error.name}</p>
    
    return (
        <div className="container-xl">
          
            <h1>Launch Detail</h1>
            <div className="card text-center">
                <p className="text-primary">Site Information: {data.launch.launch_site !== null ? data.launch.launch_site : 'No site information available'}</p>
                <div className="card-body border border-primary">
                    <p>Mission Name: {data.launch.mission_name}</p>
                    <p>Youtube link: {data.launch.links.video_link !== null ? data.launch.links.video_link : 'No Youtube link available'}</p>
                    <p onClick={() => showRocketInfo(data.launch.rocket.rocket.id)}>About Rocket used in this launch</p>
                </div>
            </div>

            <div className="text-center">
                <Link to={`/`}>Go Back</Link>
            </div>
        </div>
    )
}

export default LaunchDetail;