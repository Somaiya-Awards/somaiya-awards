import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
import Field from "../../../components/utils/Field";
import { ToastContainer, toast } from "react-toastify";
//@ts-expect-error CSS error
import "react-toastify/dist/ReactToastify.css";
import PasswordValidator from "password-validator";
import Swal from "sweetalert2";
import institutes from "../../../data/Institutions/institutes.js";
//@ts-expect-error TODO: do npm i
import { Dropzone, FileMosaic } from "@files-ui/react";
//@ts-expect-error TODO: do npm i
import Papa from "papaparse";
import Axios from "../../../axios/index.js";

export default function ManageUsers() {
    const institutionOptions = institutes;
    // for password checks

    const schema = new PasswordValidator();

    schema
        .is()
        .min(8)
        .is()
        .max(20)
        .has()
        .uppercase()
        .has()
        .lowercase()
        .has()
        .digits(2)
        .has()
        .not()
        .spaces()
        .is()
        .not()
        .oneOf(["qwerty", "password", "123456"]);

    const [credentials, setCredentials] = useState<{
        user_password?: string;
        user_role?: string;
        user_institution?: string;
        user_email_id?: string;
    }>({});

    const [files, setFiles] = useState<File[]>([]);

    const updateFiles = (incomingFiles: File[]) => {
        setFiles(incomingFiles);
    };

    const removeFile = (name: string) => {
        setFiles(files.filter((x) => x.name !== name));
    };

    const handleUpload = async () => {
        const file = files[0];

        if (!file) {
            alert("File is missing or invalid.");
            return;
        }

        if (files[0].type !== "text/csv") {
            alert("Invalid file type uploaded. Please upload valid file type");
            return;
        }

        const text = await file.text();
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

    const handleChange = (event: React.ChangeEvent<Element>) => {
        const { name, value } = (event as React.ChangeEvent<HTMLInputElement>)
            .target;

        if (name === "user_email_id") {
            setCredentials({ ...credentials, [name]: value.toLowerCase() });
        } else {
            setCredentials({ ...credentials, [name]: value });
        }
    };

    const handleSubmit = async () => {
        if (Object.keys(credentials).length < 3) {
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
            if (
                credentials.user_password &&
                !schema.validate(credentials.user_password)
            ) {
                const messages = schema.validate(credentials.user_password, {
                    details: true,
                });

                if (typeof messages !== "boolean") {
                    const errorMessages = messages.map(
                        (item) =>
                            `<p class='text-sm text-justify font-Poppins text-red-800'>${item.message}</p>`
                    );

                    Swal.fire({
                        icon: "error",
                        html: errorMessages.join(""),
                        confirmButtonColor: "rgb(185,28,28)",
                    });
                }
            } else {
                await Axios.post("/auth/register", credentials)
                    .then(() => {
                        setCredentials({});
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
                                    title="Email ID"
                                    type="email"
                                    placeholder="awards.svv@somaiya.edu"
                                    name="user_email_id"
                                    value={credentials["user_email_id"] || ""}
                                    onChange={handleChange}
                                />

                                <Field
                                    title="Role"
                                    type="dropdown"
                                    dropOpt="multiple"
                                    name="user_role"
                                    value={credentials["user_role"] || ""}
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

                                {credentials.user_role === "ADMIN" ||
                                credentials.user_role === "SPORTS ADMIN" ||
                                credentials.user_role === "STUDENTS ADMIN" ||
                                credentials.user_role ===
                                    "RESEARCH ADMIN" ? null : (
                                    <>
                                        <Field
                                            title="Institution"
                                            type="dropdown"
                                            dropOpt="multiple"
                                            name="user_institution"
                                            value={
                                                credentials.user_institution ||
                                                ""
                                            }
                                            options={institutionOptions}
                                            dropdownHiddenItem="Select institution"
                                            onChange={handleChange}
                                        />
                                    </>
                                )}

                                <Field
                                    title="Password"
                                    type="password"
                                    name="user_password"
                                    value={credentials.user_password || ""}
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
