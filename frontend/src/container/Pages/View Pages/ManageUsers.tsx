import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
import Field from "../../../components/utils/Field";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordValid from "../../../zod/Forms/Password";
import { Dropzone, FileMosaic } from "@files-ui/react";
import Papa from "papaparse";
import Axios from "../../../axios";
import { Institutes } from "../../../../../backend/constants";
import { arrayChoice, email, anyString } from "../../../../../backend/zod";
import { useData } from "../../../hooks/data.ts";

export default function ManageUsers() {
    const institutionOptions = Institutes;
    // for password checks

    const [files, setFiles] = useState<File[]>([]);

    const updateFiles = (incomingFiles: File[]) => {
        setFiles(incomingFiles);
    };

    const removeFile = (name: string) => {
        setFiles(files.filter((x) => x.name !== name));
    };

    const handleUpload = async () => {
        const file: File = files[0];

        if (!file) {
            alert("File is missing or invalid.");
            return;
        }

        if (file.type !== "text/csv") {
            alert("Invalid file type uploaded. Please upload valid file type");
            return;
        }

        const text = await file.file.text();
        const parsedData = Papa.parse(text, {
            header: true,
            skipEmptyLines: true,
        });

        const data = {
            formData: parsedData.data,
        };

        Axios.post("/auth/bulk-create", data)
            .then((res) => {
                alert(res.data.message);
                setFiles([]);
            })
            .catch((err) => {
                console.error(err);
                alert(err);
            });
    };

    const { display, setDisplay, setData, handleChange, getData } =
        useData(PasswordValid);

    const handleSubmit = async () => {
        const data = getData();

        if (data === null) {
            toast.error("All fields required", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            await Axios.post("/auth/register", display)
                .then(() => {
                    setDisplay({});
                    setData({});
                    toast.success("User created successfully", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                })
                .catch(() => {
                    toast.error("Failed to create User", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                });
        }
    };

    return (
        <div>
            <div className="flex h-screen">
                <SideBar />
                <div className="flex flex-col w-full p-5 overflow-y-scroll">
                    <div className="font-Poppins text-2xl font-semibold">
                        <h2>Manage Users</h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[50%]  shadow-xl p-4 m-5">
                            <h2 className="font-Poppins text-center text-2xl my-3 text-red-700 font-semibold">
                                Add User
                            </h2>

                            <div className="px-3">
                                <Field
                                    validator={email}
                                    formType="Manage"
                                    title="Email ID"
                                    type="email"
                                    placeholder="awards.svv@somaiya.edu"
                                    name="user_email_id"
                                    fieldsPerLine={1}
                                    page={1}
                                    required={true}
                                    value={display["user_email_id"] || ""}
                                    onChange={handleChange}
                                />

                                <Field
                                    title="Role"
                                    fieldsPerLine={1}
                                    page={1}
                                    required={true}
                                    formType="Manage"
                                    type="dropdown"
                                    dropOpt="multiple"
                                    name="user_role"
                                    value={display["user_role"] || ""}
                                    validator={arrayChoice([
                                        "ADMIN",
                                        "IEAC",
                                        "HOI",
                                        "SPORTS ADMIN",
                                        "STUDENTS ADMIN",
                                        "RESEARCH ADMIN",
                                        "STUDENT",
                                        "PEER",
                                    ])}
                                    options={[
                                        "ADMIN",
                                        "IEAC",
                                        "HOI",
                                        "SPORTS ADMIN",
                                        "STUDENTS ADMIN",
                                        "RESEARCH ADMIN",
                                        "STUDENT",
                                        "PEER",
                                    ]}
                                    dropdownHiddenItem="Select Role"
                                    onChange={handleChange}
                                />

                                {display.user_role === "ADMIN" ||
                                display.user_role === "SPORTS ADMIN" ||
                                display.user_role === "STUDENTS ADMIN" ||
                                display.user_role ===
                                    "RESEARCH ADMIN" ? null : (
                                    <>
                                        <Field
                                            required={true}
                                            fieldsPerLine={1}
                                            page={1}
                                            formType="Manage"
                                            validator={anyString}
                                            title="Institution"
                                            type="dropdown"
                                            dropOpt="multiple"
                                            name="user_institution"
                                            value={
                                                display.user_institution || ""
                                            }
                                            options={institutionOptions}
                                            dropdownHiddenItem="Select institution"
                                            onChange={handleChange}
                                        />
                                    </>
                                )}

                                <Field
                                    title="Password"
                                    required={true}
                                    fieldsPerLine={1}
                                    page={1}
                                    formType="Manage"
                                    validator={anyString}
                                    type="password"
                                    name="user_password"
                                    value={display.user_password || ""}
                                    placeholder="set default password"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex justify-center my-4">
                                <div
                                    onClick={handleSubmit}
                                    className="bg-red-700 rounded-lg p-3 w-[30%] text-center text-white font-Poppins hover:bg-red-600"
                                >
                                    Create User
                                </div>
                                <ToastContainer />
                            </div>

                            <div className=" my-10">
                                <Dropzone
                                    onChange={updateFiles}
                                    value={files}
                                    className="font-Poppins text-sm"
                                    color="#910904"
                                    accept=".csv"
                                    maxFileSize={5 * 1024 * 1024} // 5MB
                                    maxFiles={1}
                                    actionButtons={{
                                        position: "after",
                                        cleanButton: {
                                            style: {
                                                backgroundColor: "#ff8175",
                                            },
                                        },
                                        uploadButton: {
                                            style: {
                                                textTransform: "uppercase",
                                                backgroundColor: "#32a852",
                                            },
                                            onClick: handleUpload,
                                            label: "Submit",
                                        },
                                    }}
                                    footerConfig={{
                                        customMessage:
                                            "Only CSV files up to 5MB are allowed",
                                    }}
                                    label={"📃 Drop Files here"}
                                    behaviour="replace"
                                >
                                    {files.map((file) => (
                                        <FileMosaic
                                            key={file.name}
                                            {...file}
                                            onDelete={removeFile}
                                            info
                                            preview
                                            smartImgFit="orientation"
                                        />
                                    ))}
                                </Dropzone>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
