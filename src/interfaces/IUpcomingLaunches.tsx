export interface IUpcomingLaunchProps {
    id: string,
    mission_name: string,
    launch_date_utc: string,
    rocket: {
        rocket_name: string
    }
}