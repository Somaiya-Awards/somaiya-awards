import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import Box from "../../../components/status components/Box";
import LineGraph from "../../../components/status components/LineGraph";
import Datagrid from "../../../components/status components/Datagrid";
import Piechart from "../../../components/status components/Piechart";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Swal from "sweetalert2";
import Axios, { URL } from "../../../axios";
import React from "react";

const Admin = () => {
    const [pastData, setPastData] = useState<[]>([]);
    const [rows, setRows] = useState<
        {
            [key: string]: [];
        }[]
    >([]);
    const [pieData, setPieData] = useState<[]>([]);
    const [counts, setCounts] = useState<{ [key: string]: number }>({});

    const navigate = useNavigate();

    useEffect(() => {
        // first load all data
        loadDashboardData();
    }, []);

    const loadDashboardData = () => {
        // all Counts
        Axios.get("/admin/data/count/all", {})
            .then((res) => {
                setCounts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // 15 days Count
        Axios.get("/admin/data/count/15")
            .then((res) => {
                setPastData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // institution Wise count
        Axios.get("/admin/data/count/institution-wise", {})
            .then((res) => {
                setRows(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // group Wise count

        Axios.get("/admin/data/count/group", {})
            .then((res) => {
                setPieData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    /**
     * Logout Feature
     */

    const handleLogout = () => {
        // remove token from local storage
        Axios.post(URL.AUTH.LOGOUT);

        Swal.fire({
            title: "Successfully Logged Out",
            icon: "success",
            confirmButtonColor: "rgb(185,28,28)",
        });
        // navigate to login page
        navigate("/auth/login");
    };

    return (
        <div className="adminPage">
            <div className="flex h-screen text-white font-Poppins">
                <SideBar />
                <div className="flex p-3  flex-col w-full overflow-y-scroll">
                    <div className="p-2 flex flex-row items-center justify-between">
                        <div className="w-[70%]">
                            <div className="text-black font-Roboto text-2xl ">
                                DashBoard
                            </div>
                            <div className="text-black  ">
                                Welcome to your Dashboard
                            </div>
                        </div>
                        <div className="text-black">
                            <div
                                onClick={handleLogout}
                                className="flex flex-col cursor-pointer text-center justify-center"
                            >
                                <div>
                                    <LogoutRoundedIcon />
                                </div>
                                Logout
                            </div>
                        </div>
                    </div>

                    {/* flex div containing boxes and graph  */}
                    <div className="flex flex-row p-2 text-black justify-between">
                        {/* count section  */}
                        <div className="flex flex-row w-[30%]">
                            <div>
                                <Box
                                    title="Research Forms"
                                    count={counts.researchFormCount}
                                />
                                <Box
                                    title="Non Teaching Forms"
                                    count={counts.nonTeachingFormCount}
                                />
                            </div>
                            <div>
                                <Box
                                    title="Teaching Forms"
                                    count={counts.teachingFormCount}
                                />
                                <Box
                                    title="Total Forms Filled"
                                    count={
                                        counts.institutionFormCount +
                                        counts.researchFormCount +
                                        counts.sportsFormCount +
                                        counts.teachingFormCount +
                                        counts.nonTeachingFormCount +
                                        counts.feedbackOneFormCount +
                                        counts.feedbackTwoFormCount +
                                        counts.feedbackThreeFormCount +
                                        counts.feedbackFourFormCount +
                                        counts.studentsFormCount
                                    }
                                />
                            </div>
                        </div>

                        {/* graph section  */}
                        <div className="w-[70%]">
                            <LineGraph data={pastData} />
                        </div>
                    </div>

                    {/* flex row containing table and piechart  */}
                    <div className="flex flex-row text-black p-5 h-full">
                        <div className="w-[70%] custom-scroll bg-[#FFFAFA] rounded-lg p-4 h-[25rem] overflow-y-scroll">
                            <Datagrid rows={rows} />
                        </div>
                        <div className="w-[30%]">
                            <Piechart data={pieData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
