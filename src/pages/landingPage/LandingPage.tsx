
// apollo
import { useQuery, gql } from '@apollo/client';

// components
import UpcomingLaunch from '../../components/upcomingLaunch/UpcomingLaunch';

// interfaces
import { IUpcomingLaunchProps } from '../../interfaces/IUpcomingLaunches';
import { useState } from 'react';


//
const GET_UPCOMING_LAUNCHES = gql`
  query LaunchesUpcoming{
    launchesUpcoming {
        id
        launch_date_utc
        mission_id
        mission_name
        upcoming
        rocket {
            rocket_name
        }
    }
  }
`;

const LandingPage = () => {

    const {error, loading, data} = useQuery(GET_UPCOMING_LAUNCHES);
    const [selectedOption, setSelectedOption] = useState<string>('rocketName');

    if(loading) return <p>Loading...</p>;

    if(error) return <p className='text-danger'>{error.name}</p>
    

    return(
        <div className="container-xl">
            <header>
                <p>landing page</p>
            </header>

            <main>
                <label>
                    Filter by:
                    <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                        <option value="rocketName">Rocket Name</option>
                        <option value="date">Date</option>
                        <option value="ascdesc">Ascending and descending</option>
                    </select>
                </label>

                {selectedOption === 'rocketName' ? 
                    <input type='search' />
                    :
                    selectedOption === 'date' ?
                    <input type='date' />
                    :
                    <p>ascending and descending</p>
                }
            
                <div className="row">
                    {data?.launchesUpcoming.map((launch: IUpcomingLaunchProps) => (
                            <UpcomingLaunch 
                                key={launch.id}
                                id={launch.id}
                                mission_name={launch.mission_name}
                                launch_date_utc={launch.launch_date_utc}
                                rocket={launch.rocket}              
                            />
                        ))
                    }
                </div>
            </main>
        </div>
        
    )
}

export default LandingPage;