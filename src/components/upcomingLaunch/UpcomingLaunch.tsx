// router dom
import { Link } from "react-router-dom";

// interfaces
import { IUpcomingLaunchProps } from "../../interfaces/IUpcomingLaunches";

//utils
import { formatDate } from "../../utils/formatDate";

// styles
import "./upcomingLaunches.css";

const UpcomingLaunch: React.FC<IUpcomingLaunchProps> = ({id, mission_name, launch_date_utc, rocket}) => {

    return (
        <div className="col-md-6">
            <div className="card-customized text-center py-3 mb-3">
                <h4>mission name: {mission_name}</h4>
                <div className="card-body">
                    <p>rocket name: {rocket.rocket_name}</p>
                    <p className="card-text">launch date:{formatDate(launch_date_utc)}</p>                   
                    <Link to={`/launchDetail?id=${id}`} className="btn btn-success">More details</Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingLaunch;