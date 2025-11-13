import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SideBar from "@/components/SideBar";
import { motion } from "framer-motion";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import {
    columns01,
    columns02,
    columns03,
    columns04,
    columns05,
    columns06,
    columns07,
    columns08,
    columns09,
    columns10,
    columns11,
    columns12,
} from "@/data/AnalysisData/ADMIN/structure";
import { type DataType } from "@/backend/types/controllers/admin";
import xlsx from "json-as-xlsx";
import Axios, { BASE_URL as backendUrl } from "@/axios";
import React from "react";

const xlsxColumnsTeaching = [
    { label: "ID", value: "id" },
    {
        label: "Faculty Name",
        value: "faculty_name",
    },
    {
        label: "Institution",
        value: "institute_name",
    },
    { label: "Designation", value: "designation" },
    {
        label: "Application Score (40%)",
        value: "applicationScore",
    },
    {
        label: "Feedback Score (60%)",
        value: "feedbackScore",
    },
    {
        label: "Total Score",
        value: (row) =>
            row.totalScore
                ? Number(Number(row.totalScore).toFixed(2))
                : Number(
                      (
                          Number(row.applicationScore) +
                          Number(row.feedbackScore)
                      ).toFixed(2)
                  ),
    },
    {
        label: "Group",
        value: (row) => (row.groups ? row.groups[0] : "null"),
    },
    {
        label: "File",
        value: (row) =>
            row.ieacApprovedFile
                ? backendUrl + row.ieacApprovedFile.split("data")[1]
                : null,
    },
];

const xlsxColumnsNonTeaching = [
    { label: "ID", value: "id" },
    {
        label: "Staff Name",
        value: "staff_name",
    },
    {
        label: "Institution",
        value: "institution_name",
    },
    { label: "Designation", value: "designation" },
    {
        label: "Application Score (40%)",
        value: "applicationScore",
    },
    {
        label: "Feedback Score (60%)",
        value: "feedbackScore",
    },
    {
        label: "Total Score",
        value: (row) =>
            row.totalScore
                ? Number(Number(row.totalScore).toFixed(2))
                : Number(
                      (
                          Number(row.applicationScore) +
                          Number(row.feedbackScore)
                      ).toFixed(2)
                  ),
    },
    {
        label: "Group",
        value: (row) => (row.groups ? row.groups[0] : "null"),
    },
    {
        label: "File",
        value: (row) =>
            row.ieacApprovedFile
                ? backendUrl + row.ieacApprovedFile.split("data")[1]
                : null,
    },
];

export default function Responses() {
    /**
     * Sample section
     */

    const [title, setTitle] = useState<string>("");
    const [rows, setRows] = useState<GridColDef[]>([]);
    const [columns, setColumns] = useState<GridColDef[]>([]);

    const navigate = useNavigate();

    const location = useLocation();
    const path = location.pathname.split("/responses/")[1];

    useEffect(() => {
        switch (path) {
            case "outstanding-institution":
                setTitle("Outstanding Institution");
                setColumns(columns01);
                break;

            case "research":
                setTitle("Research");
                setColumns(columns02);
                break;

            case "students":
                setTitle("Students");
                setColumns(columns03);
                break;

            case "sports-boy":
                setTitle("Sports Star Boy");
                setColumns(columns11);
                break;

            case "sports-girl":
                setTitle("Sports Star Girl");
                setColumns(columns10);
                break;

            case "sports-coach":
                setTitle("Inspiring Coach");
                setColumns(columns12);
                break;

            case "teaching":
                setTitle("Teaching");
                setColumns(columns04);
                break;

            case "non-teaching":
                setTitle("Non Teaching");
                setColumns(columns05);
                break;

            case "feedback-01":
                setTitle("Teaching Students Feedback");
                setColumns(columns06);
                break;

            case "feedback-02":
                setTitle("Teaching Peers Feedback");
                setColumns(columns07);
                break;

            case "feedback-03":
                setTitle("Non Teaching Students Feedback");
                setColumns(columns08);
                break;

            case "feedback-04":
                setTitle("Non Teaching Peers Feedback");
                setColumns(columns09);
                break;

            default:
                navigate("/admin/dashboard");
        }

        Axios.get(`/admin/data/forms/${path}`)
            .then((res) => {
                setRows(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [navigate, path]);

    // handle summary download
    const handleJuryReporyDownload = () => {
        const path = location.pathname.split("/responses/")[1];
        Axios.get(`/admin/data/jury-summary/${path}`)
            .then((res) => {
                // console.log(res.data)
                if (path === "teaching") {
                    const data = [
                        {
                            sheet: "Excellence in Teaching",
                            columns: xlsxColumnsTeaching,
                            content: res.data.excellence_approved,
                        },
                        {
                            sheet: "Excellence in Teaching - NA",
                            columns: xlsxColumnsTeaching,
                            content: res.data.excellence_notApproved,
                        },
                        {
                            sheet: "Promising Teacher",
                            columns: xlsxColumnsTeaching,
                            content: res.data.promising_approved,
                        },
                        {
                            sheet: "Promising Teacher - NA",
                            columns: xlsxColumnsTeaching,
                            content: res.data.promising_notApproved,
                        },
                    ];

                    const settings = {
                        fileName: "Jury - Summary Teaching",
                        extraLength: 3,
                        writeMode: "writeFile",
                        writeOptions: {},
                        RTL: false,
                    };

                    xlsx(data, settings);
                } else if (path === "non-teaching") {
                    const content = res.data as DataType;
                    const data = [
                        {
                            sheet: "Outstanding Emp Inst",
                            columns: xlsxColumnsNonTeaching,
                            content: content.OEI_3.OK,
                        },
                        {
                            sheet: "Outstanding Emp Inst - NA",
                            columns: xlsxColumnsNonTeaching,
                            content: content.OEI_3.NO,
                        },
                        {
                            sheet: "Promising Emp Inst",
                            columns: xlsxColumnsNonTeaching,
                            content: content.PEI_23.OK,
                        },
                        {
                            sheet: "Promising Emp Inst - NA",
                            columns: xlsxColumnsNonTeaching,
                            content: content.PEI_23.NO,
                        },
                        {
                            sheet: "Outstanding Emp Trust",
                            columns: xlsxColumnsNonTeaching,
                            content: content.OEST.OK,
                        },
                        {
                            sheet: "Outstanding Emp Trust - NA",
                            columns: xlsxColumnsNonTeaching,
                            content: content.OEST.NO,
                        },
                        {
                            sheet: "Outstanding Emp SVU",
                            columns: xlsxColumnsNonTeaching,
                            content: content.OESVU.OK,
                        },
                        {
                            sheet: "Outstanding Emp SVU - NA",
                            columns: xlsxColumnsNonTeaching,
                            content: content.OESVU.NO,
                        },
                        {
                            sheet: "Promising Emp Trust",
                            columns: xlsxColumnsNonTeaching,
                            content: content.PEST.OK,
                        },
                        {
                            sheet: "Promising Emp Trust - NA",
                            columns: xlsxColumnsNonTeaching,
                            content: content.PEST.NO,
                        },
                        {
                            sheet: "Promising Emp SVU",
                            columns: xlsxColumnsNonTeaching,
                            content: content.PESVU.OK,
                        },
                        {
                            sheet: "Promising Emp SVU - NA",
                            columns: xlsxColumnsNonTeaching,
                            content: content.PESVU.NO,
                        },
                        {
                            sheet: "Outstanding Emp Hosp",
                            columns: xlsxColumnsNonTeaching,
                            content: content.OESH.OK,
                        },
                        {
                            sheet: "Outstanding Emp Hosp - NA",
                            columns: xlsxColumnsNonTeaching,
                            content: content.OESH.NO,
                        },
                        {
                            sheet: "Promising Emp Hosp",
                            columns: xlsxColumnsNonTeaching,
                            content: content.PESH.OK,
                        },
                        {
                            sheet: "Promising Emp Hosp - NA",
                            columns: xlsxColumnsNonTeaching,
                            content: content.PESH.NO,
                        },
                    ];

                    const settings = {
                        fileName: "Jury Summary - Non Teaching",
                        extraLength: 3,
                        writeMode: "writeFile",
                        writeOptions: {},
                        RTL: false,
                    };
                    //@ts-expect-error Me no like type
                    xlsx(data, settings);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="">
            <div className="h-screen flex flex-row">
                <SideBar />

                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col w-full p-5">
                        <h2 className="text-xl font-Poppins font-semibold">
                            {title}
                        </h2>
                        {location.pathname.split("/responses/")[1] ===
                            "teaching" ||
                        location.pathname.split("/responses/")[1] ===
                            "non-teaching" ? (
                            <div className="">
                                <button
                                    onClick={handleJuryReporyDownload}
                                    className="px-3 py-2 bg-red-800 text-white font-Poppins my-5 rounded-full"
                                >
                                    Jury Summary
                                </button>
                            </div>
                        ) : null}
                        <div className="my-5 overflow-y-scroll">
                            <DataGrid
                                rows={rows}
                                columns={columns}
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
                </motion.div>
            </div>
        </div>
    );
}
