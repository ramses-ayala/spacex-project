// react
import { useEffect } from "react";
import { useState } from "react";

// apollo
import { useQuery } from "@apollo/client";

// queries
import { GET_UPCOMING_LAUNCHES } from "../../graphql/queries/upcomingLaunches";

// components
import UpcomingLaunch from "../../components/upcomingLaunch/UpcomingLaunch";
import TextBox from "../../components/textBox/TextBox";
import DateBox from "../../components/dateBox/DateBox";

// interfaces
import { IUpcomingLaunchProps } from "../../interfaces/IUpcomingLaunches";

// utils
import { dashFormatDate } from "../../utils/dashFormatDate";

// styles
import "./landingPage.css";

const LandingPage = () => {
    const { error, loading, data } = useQuery(GET_UPCOMING_LAUNCHES);

    const [upcomingLaunches, setUpcomingLaunches] = useState([]);
    const [filteredUpcomingLaunches, setFilteredUpcomingLaunhes] =
        useState(upcomingLaunches);
    const [stringToSearch, setStringToSearch] = useState<string>("");
    const [dateToSearch, setDateToSearch] = useState<string>("");

    const [selectedOption, setSelectedOption] = useState<string>("rocketName");


    useEffect(() => {

        if (loading !== true) {
            setUpcomingLaunches(data.launchesUpcoming);
        }

    }, [loading, selectedOption]);


    useEffect(() => {

        let filteredUpcomingLaun = upcomingLaunches.filter((item: IUpcomingLaunchProps) => item.rocket.rocket_name.toLowerCase().includes(stringToSearch));
        setFilteredUpcomingLaunhes(filteredUpcomingLaun);

    }, [upcomingLaunches, stringToSearch]);


    useEffect(() => {

        let filteredUpcomingLaun = upcomingLaunches.filter((item: IUpcomingLaunchProps) => dashFormatDate(item.launch_date_utc) === dateToSearch);
        setFilteredUpcomingLaunhes(filteredUpcomingLaun);

    }, [dateToSearch]);


    const handlerSelectedOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const string = e.target.value.toLowerCase();
        setStringToSearch(string);
    };

    const handlerDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        let date = e.target.value;

        let extractedDay = date.split("-")[2];

        if (extractedDay.length === 2 && extractedDay.charAt(0) === "0") {
            extractedDay = extractedDay.replace(extractedDay.charAt(0), "");
        }

        // Replace the extractedDate in the date variable
        date = date.split("-").slice(0, 2).join("-") + "-" + extractedDay;

        setDateToSearch(date);
    };

    if (loading) return <p>Loading...</p>;

    if (error) return <p className="text-danger">{error.name}</p>;

    return (

        <div className="container-xl">

            <main>
                <div className="d-flex justify-content-center">

                    <div className="d-flex flex-column gap-2 w-25 mb-4">

                        <label className="text-white">
                            Filter by:
                        </label>
                        <select value={selectedOption} onChange={handlerSelectedOption}>
                            <option value="rocketName">Rocket Name</option>
                            <option value="date">Date</option>
                            <option value="ascdesc">Ascending and descending</option>
                        </select>


                        {selectedOption === "rocketName" ? (
                            <TextBox
                                placeholder='Search By Rocket Name'
                                handlerSearch={handlerSearch}
                            />
                        ) : selectedOption === "date" ? (
                            <DateBox
                                handlerDate={handlerDate}
                            />
                        ) : (
                            <p>ascending and descending</p>
                        )}
                    </div>
                </div>

                <div className="row">
                    {filteredUpcomingLaunches.map((launch: IUpcomingLaunchProps) => (
                        <UpcomingLaunch
                            key={launch.id}
                            id={launch.id}
                            mission_name={launch.mission_name}
                            launch_date_utc={launch.launch_date_utc}
                            rocket={launch.rocket}
                        />
                    ))}
                </div>
            </main>
        </div>

    );
};

export default LandingPage;
