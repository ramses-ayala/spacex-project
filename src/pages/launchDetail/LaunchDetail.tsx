import { useState, useEffect } from "react";


// external libraries
import ReactPlayer from "react-player/youtube";

// apollo
import { useQuery, useLazyQuery } from '@apollo/client';

// router - dom
import { useSearchParams, Link } from "react-router-dom";

// queries
import { GET_LAUNCH_BY_ID } from "../../graphql/queries/getLaunchById";
import { GET_ROCKET_BY_ID } from "../../graphql/queries/getRocketById";

// styles
import "./launchDetail.css";

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
            <div className="container-xl mt-5 card-customized text-center py-4">
                <p>Name: {rocketInfo.name}</p>
                <p>Rocket Type: {rocketInfo.type}</p>
                <p>Description:</p>
                <p>{rocketInfo.description}</p>
                <button onClick={() => setRocketInfo(undefined)} className="btn-custom">Go back</button>
            </div>
        )
    }
    
    if(loading) return <div className="d-flex flex-column align-items-center text-white" style={{height: '78vh'}}>
                            <div className="spinner-border" role="status" aria-hidden="true" style={{height: '5rem', width: '5rem'}}></div>
                            <strong>Loading...</strong>
                        </div>
        

    if(error) return <p className="text-white fs-1 fs-1 text-center">{error?.message !== 'Failed to fetch' ? 'No records :(' : 'There is an issue fetching data :('}</p>
    
    return (
        <div className="container-xl mt-3 launch-detail-card">
            <div className="card-customized text-center py-4">
                <h1>Launch Detail</h1>
                <p className="">Site Information: {data.launch.launch_site !== null ? data.launch.launch_site : 'No site information available'}</p>
                <div className="card-body d-flex flex-column align-items-center">
                    <p>Mission Name: {data.launch.mission_name}</p>
                    {data.launch.links.video_link !== null ?
                        <ReactPlayer 
                            url={data.launch.links.video_link}
                            width={'70%'}
                        />
                        : 
                        <p>No video available</p>
                    }
                    
                    <p onClick={() => showRocketInfo(data.launch.rocket.rocket.id)} className="btn-custom mt-4">About Rocket used in this launch</p>    
                </div>
            </div>

            <div className="text-center my-4">
                <Link to={`/`} className="btn-custom border border-warning"> Go Back</Link>
            </div>
        </div>
    )
}

export default LaunchDetail;