import { useEffect, useState } from "react";
import SideBar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { DataGrid, type GridColDef, GridToolbar } from "@mui/x-data-grid";
import columns01 from "../../../../data/AnalysisData/STUDENTS ADMIN/structure";
import Axios from "../../../../axios";
import React from "react";

export default function StudentResponses() {
    const [title, setTitle] = useState<string>();
    const [columns] = useState<GridColDef[]>(columns01);
    const [rows, setRows] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.split("/responses/")[1];

        const formName = path.replaceAll("-", " ");

        const url = `/students-admin/data/${path}`;

        Axios.get(url)
            .then((res) => {
                setRows(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });

        setTitle(formName);
    }, [location]);

    return (
        <div className="flex">
            <SideBar />

            <div className="flex overflow-y-scroll flex-col w-full h-screen">
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
