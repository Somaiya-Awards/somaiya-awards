import React, { useState } from "react";
import "./css/config.css";
import type { FormEntry } from "../../data/Forms/types";
import * as z from "zod";

export type FieldProp = {
    onChange: (
        name: string,
        value: string | File,
        actionType: "add" | "delete"
    ) => void;
    formType: string;
    className?: string;
    value: string | File;
} & FormEntry;

function Field(props: FieldProp) {
    const [error, setError] = useState<string | null>(null);
    const [, setFocused] = useState<boolean>(false);

    function handleTextChange<
        T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
    >(event: React.ChangeEvent<T>) {
        const { name, value } = event.target;
        const validator = props.validator;
        const response = validator.safeParse(value);

        if (!response.success) {
            setError(
                z.treeifyError(response.error as z.ZodError).errors.join(", ")
            );
            props.onChange(name, value, "delete");
        } else {
            props.onChange(name, value as string, "add");
            setError(null);
        }
    }

    function handleFileChange<T extends HTMLInputElement>(
        event: React.ChangeEvent<T>
    ) {
        const { name, files } = event.target;

        if (!files) return;
        const response = props.validator.safeParse(files[0]);

        if (!response.success) {
            setError(
                z.treeifyError(response.error as z.ZodError).errors.join(", ")
            );
            props.onChange(name, files[0], "delete");
        } else {
            props.onChange(name, response.data as File, "add");
            setError(null);
        }
    }

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    function RadioProp(props: FieldProp) {
        if (props.type !== "radio") return null;

        return props.options.map((item: string | number, index: number) => (
            <div key={index}>
                <label>
                    <input
                        type={props.type}
                        name={props.name}
                        required={props.required}
                        value={item}
                        checked={props.value === item ? true : false}
                        className=""
                        onChange={handleTextChange}
                    />{" "}
                    {item}
                </label>
            </div>
        ));
    }

    function DropDownProp(props: FieldProp) {
        if (props.type !== "dropdown") return null;
        return props.dropOpt === "single" ? (
            <select
                name={props.name}
                required={props.required}
                onChange={handleTextChange}
                value={props.value ? (props.value as string) : ""}
                className="w-72 p-2 rounded-md shadow-lg active:shadow-2xl hover:w-full transition-all duration-500 outline-none"
            >
                <option hidden> {props.dropdownHiddenItem} </option>
                <option value={localStorage.getItem("institution") as string}>
                    {localStorage.getItem("institution")}
                </option>
            </select>
        ) : (
            <select
                name={props.name}
                required={props.required}
                onChange={handleTextChange}
                value={props.value ? (props.value as string) : ""}
                className="w-72 p-2 rounded-md shadow-lg active:shadow-2xl hover:w-full transition-all duration-500 outline-none"
            >
                <option hidden> {props.dropdownHiddenItem} </option>
                {props.options.map((item) => {
                    return <option value={item}>{item}</option>;
                })}
            </select>
        );
    }

    function TextAreaProp(props: FieldProp) {
        if (props.type !== "textarea") return null;
        return (
            <textarea
                className="border-black p-3 border-2 rounded-lg w-full h-48"
                name={props.name}
                value={props.value ? (props.value as string) : ""}
                onChange={handleTextChange}
            ></textarea>
        );
    }

    function FileProp(props: FieldProp) {
        if (props.type !== "file") return null;

        return (
            <>
                <input
                    autoComplete="off"
                    type={props.type}
                    accept={props.accept}
                    name={props.name}
                    required={props.required}
                    className={`focus:outline-none color-red-400 }`}
                    onChange={handleFileChange}
                />
                <p className="p-2 ">
                    {" "}
                    <span className="text-red-700 font-semibold font-Poppins">
                        {" "}
                        selected File :{" "}
                    </span>{" "}
                    {(props.value as File).name}
                </p>
            </>
        );
    }

    function NumberProp(props: FieldProp) {
        if (props.type !== "number") return null;

        return (
            <input
                autoComplete="off"
                type={props.type}
                name={props.name}
                required={props.required}
                className={`focus:outline-none  w-64 shadow-lg p-2 border-gray-600 border-b-2 focus:border-red-700'`}
                value={props.value ? (props.value as string) : ""}
                onChange={handleTextChange}
            />
        );
    }

    function TextProp(props: FieldProp) {
        switch (props.type) {
            case "text":
            case "email":
            case "date":
            case "password":
                break;
            default:
                return null;
        }

        return (
            <input
                autoComplete="off"
                type={props.type}
                placeholder={!props.placeholder ? "" : props.placeholder}
                name={props.name}
                required={props.required}
                className={`focus:outline-none border-b-2 font-Poppins border-gray-700 focus:border-red-700 w-64 focus:w-full transition-all  duration-500 `}
                defaultValue={props.value ? (props.value as string) : ""}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleTextChange}
            />
        );
    }

    const WhoThatPokemon = () => {
        switch (props.type) {
            case "number":
                return <NumberProp {...props} />;
            case "file":
                return <FileProp {...props} />;
            case "textarea":
                return <TextAreaProp {...props} />;
            case "radio":
                return <RadioProp {...props} />;
            case "dropdown":
                return <DropDownProp {...props} />;
            case "text":
            case "email":
            case "date":
            case "password":
                return <TextProp {...props} />;
        }
        return null;
    };

    function GiveJudgement() {
        if (error) {
            return <p className="font-Poppins text-red-700">{error}</p>;
        }

        return null;
    }

    return (
        <div
            className={`my-3 p-3 inline-block ${
                props.fieldsPerLine === 2 ? "w-1/2" : "w-full"
            }`}
        >
            <div className="mb-3">
                <label className="font-Poppins">
                    {props.title}
                    <span className="px-2 text-red-600">
                        {props.required ? "*" : null}
                    </span>
                </label>
                {props.link !== undefined ? (
                    <p>
                        <a
                            href={props.link}
                            rel="noreferrer"
                            target="_blank"
                            className="font-Poppins font-semibold text-red-700"
                        >
                            Click here
                        </a>
                    </p>
                ) : null}

                <GiveJudgement />
            </div>
            <div>
                <WhoThatPokemon />
            </div>
        </div>
    );
}

export default React.memo(Field);
