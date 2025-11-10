import SideBar from "@/container/views/studentsAdmin/components/Sidebar";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Tile from "./components/Tile";
import React from "react";
import Axios, { URL } from "@/axios";

export default function StudentsAdmin() {
    const navigate = useNavigate();

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
        <div className="flex">
            <SideBar />

            <div className="flex flex-col h-screen w-full overflow-y-scroll">
                <div className="font-Poppins p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold ">
                                Welcome Student's Admin
                            </h2>
                        </div>
                        <div>
                            <div
                                className="p-2 flex flex-col justify-center items-center cursor-pointer"
                                onClick={handleLogout}
                            >
                                <div>
                                    <LogoutRoundedIcon />
                                </div>

                                <div>Logout</div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold">Features</h2>

                    <Tile
                        title="Columns Selection"
                        text="Columns Selection: Look for the Columns Selection feature in the column header section. You may find a checkbox or an icon to toggle the visibility of columns."
                    />

                    <Tile
                        title="Data Export"
                        text="Export: Locate the Export functionality in the toolbar or a context menu within the Data Grid component. It might be represented by an icon (e.g., CSV icon, Excel icon) or a menu item like 'Export to CSV or Export to Excel.'"
                    />

                    <Tile
                        title="Filter"
                        text="Find the Filter option in the column headers. Look for a filter menu or dialog that allows you to apply various filter criteria to the data."
                    />

                    <Tile
                        title="Sorting"
                        text="Clicking on a column header typically triggers the sorting functionality.
                    When a user clicks on a column header for the first time, the data is sorted in ascending order (e.g., from the smallest to the largest value).
                    Clicking on the same column header again reverses the sorting order, showing the data in descending order (e.g., from the largest to the smallest value)."
                    />

                    <Tile
                        title="Quick Filter"
                        text="Quick Filter often performs a partial match, meaning it shows results that contain the entered search term, regardless of its position in the data.
                    Clearing the search input field or deleting its contents usually brings back the full dataset, restoring the original view."
                    />
                </div>
            </div>
        </div>
    );
}
