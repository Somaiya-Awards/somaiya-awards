import { useState } from "react";
import SideBar from "../../../../components/SideBar";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Swal from "sweetalert2";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import React from "react";
import Axios from "../../../../axios";

export default function Users() {
    const [rows] = useState([]);
    const [columns] = useState([
        {
            field: "id",
            headerName: "User ID",
            width: 350,
        },
        {
            field: "email_id",
            headerName: "Email ID",
            width: 350,
        },
        {
            field: "institution",
            headerName: "Institution",
            width: 350,
        },
        {
            field: "role",
            headerName: "Role",
            width: 350,
        },
        {
            field: "delete user",
            headerName: "Actions",
            width: 200,
            renderCell: (params: { row: { id: number; email_id: string } }) => {
                return (
                    <div>
                        <button onClick={() => handleDelete(params)}>
                            <DeleteRoundedIcon style={{ color: "gray" }} />
                        </button>
                    </div>
                );
            },
        },
    ]);

    const handleDelete = (params: {
        row: { id: number; email_id: string };
    }) => {
        Swal.fire({
            title: "Confirmation",
            icon: "question",
            text: `Do you wish to delete User ${params.row.email_id}`,
            showDenyButton: true,
            confirmButtonText: "Confirm",
            denyButtonText: "Deny",
            confirmButtonColor: "#4bb543",
        }).then((res) => {
            if (res.isConfirmed) {
                // delete query
                Axios.delete("/admin/data/delete-user", {
                    data: { userId: params.row.id },
                })
                    .then(() => {
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }
        });
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="w-full h-screen overflow-y-scroll flex-col">
                <div className="p-5 overflow-y-scroll">
                    <h1 className="text-2xl font-semibold font-Roboto text-red-800">
                        Users' Details
                    </h1>

                    <div className="my-3 p-5">
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            density="comfortable"
                            slots={{ toolbar: GridToolbar }}
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
