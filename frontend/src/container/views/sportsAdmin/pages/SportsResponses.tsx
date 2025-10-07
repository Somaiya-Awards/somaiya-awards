import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../components/Sidebar";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import {
    columns01,
    columns02,
    columns03,
} from "../../../../data/AnalysisData/SPORTS ADMIN/structure";
import Axios from "../../../../axios";
import React from "react";

export default function SportsResponses() {
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState<GridColDef[]>([]);
    const [title, setTitle] = useState<string>();

    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname.split("/responses/")[1];
    const name = path.replaceAll("-", " ");

    useEffect(() => {

        switch (path) {
            case "sports-star-girl":
                setColumns(columns01);
                break;

            case "sports-star-boy":
                setColumns(columns02);
                break;

            case "inspiring-coach":
                setColumns(columns03);
                break;

            default:
                navigate("/sports-admin");
        }

        const url = `/sports-admin/data/${path}`;

        Axios.get(url)
            .then((res) => {
                setRows(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });

        setTitle(name);
    }, [navigate, path]);

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col w-full h-screen overflow-y-scroll">
                <div className="p-5">
                    <div>
                        <h2 className="text-xl font-Poppins font-semibold capitalize">
                            {title}
                        </h2>
                    </div>

                    <div className="my-5">
                        <DataGrid
                            columns={columns}
                            rows={rows}
                            density="comfortable"
                            slots={{
                                toolbar: GridToolbar,
                            }}
                            slotProps={{
                                toolbar: {
                                    showQuickFilter: true,
                                    quickFilterProps: {
                                        debounceMs: 500,
                                    },
                                },
                            }}
                            sx={{
                                boxShadow: 2,
                                padding: 2,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
