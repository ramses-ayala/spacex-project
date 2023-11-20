// router dom
import { Link } from "react-router-dom";

// interfaces
import { IUpcomingLaunchProps } from "../../interfaces/IUpcomingLaunches";

//utils
import { formatDate } from "../../utils/formatDate";

const UpcomingLaunch: React.FC<IUpcomingLaunchProps> = ({id, mission_name, launch_date_utc, rocket}) => {

    return (
        <div className="col-md-6">
            <div className="card border border-success text-center py-3">
                <h4 className="text-primary">mission name: {mission_name}</h4>
                <img src="" className="card-img-top" alt="alternative" />
                <div className="card-body">
                    <p>rocket name: {rocket.rocket_name}</p>
                    <p className="card-text">launch date:{formatDate(launch_date_utc)}</p>                   
                    <Link to={`/launchDetail?id=${rocket.rocket.id}`} className="btn btn-success">More details</Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingLaunch;