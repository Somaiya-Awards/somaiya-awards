import React, { useState, useEffect, useCallback, useMemo } from "react";
import FormStages from "./FormStages";
import Field from "./utils/Field";
import { useNavigate, createSearchParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Axios from "../axios";
import type { StagesType } from "./utils/data/types";
import swalAlert from "./utils/swal";
import type { FormEntry } from "../data/Forms/types";
import debounce from "./utils/debounce";

export type FormProps = {
    pageCount: number;
    pageHeadings: string[];
    data: FormEntry[];
    stages: StagesType[];
    message?: string;
};

export type FormData = {
    [key: string]: string | File | number;
};

const Forms = (props: FormProps) => {
    /**
     * Variables and States
     */

    const limit = props.pageCount;
    const pageHeaders = props.pageHeadings;
    const navigate = useNavigate();

    const [current, setCurrent] = useState(0);
    const [formData, setFormData] = useState<FormData>({});
    const [percentage, setPercentage] = useState(0);
    const formName = useMemo(() => window.location.href.split("/forms/")[1], []);

    /**
     * functions
     */

    const handleNext = () => {
        if (current < limit) {
            setCurrent(current + 1);
        }

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const handlePrevious = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const handleFieldChange = useCallback((name: string, value: string, actionType: "add" | "delete") => {

        setFormData((prev) => {
            let newData = {...prev};

            switch (actionType) {
                case "add":
                    newData[name] = value;
                    break;
                case "delete":
                    delete newData[name];
            }
    
            setPercentage(Object.keys(newData).length / props.data.length);
    
            debounce((key: string, data: any) => {
                localStorage.setItem(key, JSON.stringify(data));
            }, 300);
        
            return newData;
        });

    }, [props.data]);

    /**
     * @returns page number of field which is not present in formData state
     */

    const missingFieldPage = () => {
        for (const field of props.data) {
            if (!formData[field.name]) {
                return field.page;
            }
        }

        return null;
    };

    const handleSubmit = () => {
        // Check for phone number validation
        const phoneFields = ["phone_number", "contact_number"];
        for (const field of phoneFields) {
            if (formData[field] && String(formData[field]).length !== 10) {
                swalAlert({
                    title: "Invalid Phone Number",
                    text: `${field.replace(
                        "_",
                        " "
                    )} must be exactly 10 digits.`,
                    icon: "warning",
                    backdrop: true,
                    background: "rgba(255,250,250)",
                    iconColor: "rgb(185,28,28)",
                    confirmButtonColor: "rgb(185,28,28)",
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: "gradient-button",
                    },
                });
                return; // Stop form submission
            }
        }

        if (props.data.length !== Object.keys(formData).length) {
            swalAlert({
                title: "Incomplete Form",
                text: "Please fill out the form completely",
                icon: "warning",
                backdrop: true,
                background: "rgba(255,250,250)",
                iconColor: "rgb(185,28,28)",
                confirmButtonColor: "rgb(185,28,28)",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "gradient-button",
                },
            });

            const incompletePageNumber = missingFieldPage();

            if (incompletePageNumber !== null)
                setCurrent(incompletePageNumber - 1);
        } else {
            const formType = window.location.href.split("/forms/")[1]; // TODO: remove this and make it a prop
            const postUrl = `/forms/${formType}`;

            Axios.post(postUrl, formData, {
                headers: {
                    "Content-Type": formType.includes("feedback")
                        ? "application/json"
                        : "multipart/form-data",
                },
            })
                .then(() => {
                    localStorage.removeItem(
                        window.location.href.split("/forms/")[1] + "Data"
                    );
                    navigate({
                        pathname: "/forms/cards",
                        search: createSearchParams({
                            submitted: "true",
                            title: "Form submitted Successfully",
                        }).toString(),
                    });
                })
                .catch((err) => {
                    swalAlert({
                        text:
                            err.response?.data?.message || "Submission failed",
                        icon: "error",
                    });
                });
        }
    };

    const colorChange = () => {
        const stagesList = document.querySelectorAll(".stages");

        for (const stages of stagesList) {
            const stageNumber = Number(stages.innerHTML);

            if (stageNumber < current + 1) {
                stages.classList.add("bg-red-500");
                stages.classList.add("text-white");
                stages.classList.remove("bg-white");
            } else {
                stages.classList.remove("bg-red-500");
                stages.classList.remove("text-white");
                stages.classList.add("bg-white");
            }
        }
    };

    const handleFormStageChange = (e: React.MouseEvent<HTMLElement>) => {
        //@ts-expect-error Event type matching ignore
        const value = Number(e.target.innerHTML) - 1;
        setCurrent(value); // renders everything

        // color change logic
        colorChange();
    };

    /**
     * Renderers
     */

    const renderFields = useCallback(() => {

        return props.data.map((entry, index) => {
            if (current === entry.page - 1) {
                return (
                    <Field
                        {...entry}
                        formType={formName}
                        onChange={handleFieldChange}
                        key={index}
                    />
                );
            }
            return null;
        });
    }, [props.data, current, formName])

    useEffect(() => {
        const dataName = formName + "Data";

        if (!localStorage.getItem(dataName)) {
            setFormData({});
        } else {
            setFormData(JSON.parse(localStorage.getItem(dataName) || "{}"));
        }
    }, []);

    useEffect(() => {
        // is this necessary?

        const stagesList = document.querySelectorAll(".stages");

        for (const stages of stagesList) {
            const stageNumber = Number(stages.innerHTML);

            if (stageNumber < current + 1) {
                stages.classList.add("bg-red-500");
                stages.classList.remove("bg-white");
                stages.classList.add("text-white");
            } else {
                stages.classList.remove("bg-red-500");
                stages.classList.remove("text-white");
                stages.classList.add("bg-white");
            }
        }
    }, [current]);
    /**
     * Return Block
     */

    return (
        <div className="">
            <FormStages stages={props.stages} onClick={handleFormStageChange} />

            <div className="border-black border-[1] mx-auto rounded-xl shadow-2xl bg-0xFAF9F6 p-3 px-[5rem] w-[70%]">
                <div className="w-full text-black text-center py-5  font-Roboto font-semibold text-2xl">
                    {pageHeaders[current]}
                </div>
                <div className="p-5 flex justify-center">
                    <CircularProgressbar
                        className="w-16 h-16"
                        maxValue={100}
                        value={Math.round(percentage * 100)}
                        text={`${Math.round(percentage * 100)} %`}
                    />
                </div>

                {props.message === undefined ? null : (
                    <div className="text-md font-Poppins mt-[3rem] bg-red-300  font-bold italic rounded-lg p-3 my-6">
                        {props.message}
                    </div>
                )}
                <div className="text-center  mb-[3rem] text-sm italic">
                    Page {current + 1} of {limit + 1}
                </div>

                <div className="form py-5 px-3">
                    {renderFields()}

                    <div className="mt-10 px-3 flex justify-between">
                        <button
                            onClick={handlePrevious}
                            className="shadow-md w-28 bg-red-700 text-white text-lg p-3 rounded-xl"
                        >
                            Previous
                        </button>
                        {current === limit ? (
                            <button
                                onClick={handleSubmit}
                                id="submit-btn"
                                className="shadow-md w-28 bg-red-700 text-white text-lg p-3 rounded-xl"
                            >
                                Submit
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="shadow-md w-28 border-red-700  bg-white border-2 hover:bg-red-700 hover:text-white text-lg p-3 rounded-xl"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forms;


