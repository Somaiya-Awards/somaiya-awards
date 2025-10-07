import { useEffect, useState } from "react";
import SideBar from "../../../../components/SideBar";
import { FileUploader } from "react-drag-drop-files";
import Swal from "sweetalert2";
import xlsx from "json-as-xlsx";
import Axios from "../../../../axios";
import React from "react";

export default function Announce() {
    const [announced, setAnnounced] = useState<boolean>(false);
    const [url, setUrl] = useState();

    const fileTypes = ["CSV", "XLSX"];

    function handleChange(file: File) {
        Swal.fire({
            icon: "question",
            title: "Confirmation",
            text: `Selected File : ${file.name}`,
        }).then((res) => {
            if (res.isConfirmed) {
                // make axios post request
                Axios.post(
                    "/admin/data/announce-results",
                    { result: file },
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                )
                    .then((res) => {
                        console.log(res);
                        window.location.reload();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        });
    }

    const handleDownload = () => {
        const data = [
            {
                sheet: "Results",
                columns: [
                    { label: "Name", value: "name" },
                    { label: "Institution", value: "inst" },
                    { label: "Category", value: "category" },
                ],
                content: [
                    {
                        name: "jash",
                        inst: "kjsit",
                        category: "jk",
                    },
                ],
            },
        ];

        const settings = {
            fileName: "Awards Result Announcement",
            extraLength: 3,
            writeMode: "writeFile",
            writeOptions: {},
            RTL: false,
        };

        xlsx(data, settings);
    };

    useEffect(() => {
        const url = "/admin/data/results";
        Axios.get(url)
            .then((res) => {
                if (res.data.data.length != 0) {
                    let path = res.data.data[0].result;
                    path = path.split("data")[1];
                    setUrl(path);
                    setAnnounced(true);
                } else {
                    console.log(res.data);
                }
            })

            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="flex">
            <SideBar />

            <div className="flex flex-col w-full h-screen overflow-y-scroll">
                <div className="p-5 font-Poppins">
                    <h2 className="text-xl font-semibold">
                        📢 Announce Results
                    </h2>

                    {announced ? (
                        <>
                            <p className="my-2">
                                <span className="font-semibold text-green-700">
                                    Status
                                </span>{" "}
                                : Announced
                            </p>

                            <div>
                                Results have been announced for the current Year
                                . Download The File to View
                                <div className="bg-red-800 text-white p-3 hover:bg-red-400 w-52 my-8 rounded-xl text-center animate-pulse">
                                    <a href={`${url}`} download>
                                        Download
                                    </a>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="my-2">
                                <span className="font-semibold text-green-700">
                                    Status
                                </span>{" "}
                                : Not Announced
                            </p>

                            <p className="text-md my-3">
                                Drop a Excel File with names of winner's , their
                                institute name and Award category to Announce
                                Results Publicly
                            </p>

                            <div>
                                <button
                                    className="px-3 py-2 bg-red-800 rounded-full text-white"
                                    onClick={handleDownload}
                                >
                                    Download CSV Format
                                </button>
                            </div>

                            <div className="my-5 p-2 flex justify-center">
                                <div className=" rounded-xl bg-slate-100 h-[200px] w-[50%] flex justify-center items-center">
                                    <FileUploader
                                        handleChange={handleChange}
                                        name="result"
                                        types={fileTypes}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
