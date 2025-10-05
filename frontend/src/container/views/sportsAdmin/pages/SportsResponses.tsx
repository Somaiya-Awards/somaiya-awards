import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../components/Sidebar";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
    columns01,
    columns02,
    columns03,
} from "../../../../data/AnalysisData/SPORTS ADMIN/structure";
import Axios from "../../../../axios";

export default function SportsResponses() {
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [title, setTitle] = useState();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const path = location.pathname.split("/responses/")[1];
        const name = path.replaceAll("-", " ");

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
    }, []);

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
