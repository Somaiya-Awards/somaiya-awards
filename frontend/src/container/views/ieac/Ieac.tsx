import React, { useState, useEffect } from "react";
import SideBar from "./ieacComponents/Sidebar";
import { MoonLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Tile from "./ieacComponents/Tile";
import Axios from "../../../axios";

export default function Ieac() {
    const navigate = useNavigate();

    /**
     * Logout
     */

    const handleLogout = () => {
        // remove token from local storage

        localStorage.removeItem("token");
        localStorage.removeItem("user_id");

        Swal.fire({
            title: "Successfully Logged Out",
            icon: "success",
            confirmButtonColor: "rgb(185,28,28)",
        });

        // navigate to login page
        navigate("/auth/login");
    };

    /**
     * Authorization
     */

    return (
        <div className="h-screen w-full">
            <div className="flex">
                <SideBar />
                <div className="flex flex-col p-5 font-Poppins w-full overflow-y-scroll h-screen">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col">
                            <div className="text-xl font-semibold">
                                Welcome IEAC Member
                            </div>
                            <div className="text-sm">
                                {localStorage.getItem("institution")}
                            </div>
                        </div>

                        <div
                            onClick={handleLogout}
                            className="p-5 mr-[2rem] hover:cursor-pointer flex flex-col items-center"
                        >
                            <div>
                                <LogoutRoundedIcon />
                            </div>
                            <div>Logout</div>
                        </div>
                    </div>

                    <div className="mt-[2rem]">
                        <h2 className="text-lg font-semibold">Instructions</h2>
                        <div className="p-2 ml-[2rem] mt-3">
                            <div>
                                <Tile
                                    title="1. Navigate to Recommended / Not Recommeded Columns"
                                    info="In each form responses there is a column name recommended to recommend a nominee to futher rounds. In case some category of awards there is a not recommeded column which is mandatory for marking the nominees"
                                    image={"/inst1.png"}
                                />

                                <Tile
                                    title="2. Click on checkbox to Recommned"
                                    info="Click on the checkbox in front of the nominee to Recommend him/her"
                                    image={"/inst2.png"}
                                />

                                <Tile
                                    title="3a. Confirm your decision"
                                    info="Click on confirm if you confirm your decision to recommend the nominee else click deny or anywhere else on screen"
                                    image={"/inst3.png"}
                                />

                                <Tile
                                    title="3b. Enter your score and confirm"
                                    info="In case of teaching and non- teaching category of awards IAEC Member are required to enter their score of each nominee wheter he/she is recommended or not  and confirm "
                                    image={"/inst4.png"}
                                />

                                <Tile
                                    title="4. Upload Recommendation File"
                                    info="At last after confirming all the decision and marking recommeded and not recommended ones upload the recommendation file and confirm it "
                                    image={"/inst5.png"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
