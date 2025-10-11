import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../../../components/hoi_components/SideBar";
import { DataGrid, type GridColDef, GridToolbar } from "@mui/x-data-grid";
import {
    columns01,
    columns02,
    columns03,
    columns04,
    columns05,
    columns06,
    columns07,
} from "../../../data/AnalysisData/HOI/structure";
import Axios from "../../../axios";
import React from "react";

export default function Analysis() {
    const [title, setTitle] = useState<string>("");
    const [columns, setColumns] = useState<GridColDef[]>([]);
    const [rows, setRows] = useState([]);
    const location = useLocation();

    useEffect(() => {
        let formTitle = location.pathname.split("/analysis/")[1]; // dynamic title of table

        switch (formTitle) {
            case "outstanding-institution":
                setColumns(columns01);
                break;

            case "research":
                setColumns(columns02);
                break;

            case "sports":
                setColumns(columns03);
                break;

            case "teaching":
                setColumns(columns04);
                break;

            case "non-teaching":
                setColumns(columns05);
                break;

            case "students":
                setColumns(columns06);
                break;
            case "house":
                setColumns(columns07);
                break;
        }

        const url = `/hoi/data/${formTitle}`;

        Axios.get(url).then((res) => {
            if (res.data && res.data.data) {
                setRows(res.data.data);
            }
        });

        formTitle = formTitle.charAt(0).toUpperCase() + formTitle.slice(1);

        setTitle(formTitle);
    }, [location]);

    return (
        <div>
            <div className="flex">
                <SideBar />

                <div className="flex flex-col w-full overflow-y-scroll h-screen">
                    <div className="p-5">
                        <div className="my-5">
                            <h2 className="text-xl font-Poppins font-semibold">
                                {title} Form Analysis
                            </h2>
                        </div>
                        <div className="">
                            <DataGrid
                                autoHeight
                                columns={columns}
                                rows={rows}
                                slots={{
                                    toolbar: GridToolbar,
                                }}
                                slotProps={{
                                    toolbar: {
                                        showQuickFilter: true,
                                        quickFilterProps: { debounceMs: 500 },
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
        </div>
    );
}
