import React, { useState } from "react";
import "./css/config.css";
import { validator, type ValidFiles } from "./validator";
import type { Validate } from "../../data/Forms/types";

export type CommonFieldProps = {
    onChange: (event: React.ChangeEvent) => void;
    fieldsPerLine?: number;
    required?: boolean;
    title: string;
    link?: string; // useless property
    name: string;
    value: string;
    page?: number;
} & Validate;

export type FieldProp =
    | (CommonFieldProps & { type: "radio"; options: string[] })
    | (CommonFieldProps &
          (
              | {
                    type: "dropdown";
                    dropOpt: "single";
                    dropdownHiddenItem: string;
                }
              | {
                    type: "dropdown";
                    dropOpt: "multiple";
                    options: string[];
                    dropdownHiddenItem: string;
                }
          ))
    | (CommonFieldProps & { type: "textarea" })
    | (CommonFieldProps & {
          type: "file";
          value: { name: string };
          fileType: ValidFiles;
          accept: ".pdf" | ".jpg";
      })
    | (CommonFieldProps & { type: "number" })
    | (CommonFieldProps & { type: "text"; placeholder?: string })
    | (CommonFieldProps & { type: "email"; placeholder?: string })
    | (CommonFieldProps & { type: "password"; placeholder?: string })
    | (CommonFieldProps & { type: "date"; placeholder?: string });

function Field(props: FieldProp) {
    const [value, setValue] = useState<string>("");
    const [, setFocused] = useState<boolean>(false);

    function handleChange<
        T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
    >(event: React.ChangeEvent<T>) {
        setValue(event.target.value);
        props.onChange(event); // Pass the event to the parent component's onChange handler
    }

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const { fieldsPerLine } = props;

    function RadioProp(props: FieldProp) {
        if (props.type !== "radio") return null;

        return props.options.map((item, index) => (
            <div key={index}>
                <label>
                    <input
                        type={props.type}
                        name={props.name}
                        required={props.required}
                        value={item}
                        checked={props.value === item ? true : false}
                        className=""
                        onChange={handleChange}
                    />{" "}
                    {item}
                </label>
            </div>
        ));
    }

    function DropwDownProp(props: FieldProp) {
        if (props.type !== "dropdown") return null;
        return props.dropOpt === "single" ? (
            <select
                name={props.name}
                required={props.required}
                onChange={handleChange}
                value={props.value}
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
                onChange={handleChange}
                value={props.value}
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
                value={props.value}
                onChange={handleChange}
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
                    onChange={handleChange}
                />
                <p className="p-2 ">
                    {" "}
                    <span className="text-red-700 font-semibold font-Poppins">
                        {" "}
                        selected File :{" "}
                    </span>{" "}
                    {props.value["name"]}
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
                value={props.value}
                onChange={handleChange}
            />
        );
    }

    function TextProp(props: FieldProp) {
        switch (props.type) {
            case "text":
            case "email":
            case "date":
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
                value={props.value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
        );
    }

    function WhoThatPokemon(props: FieldProp) {
        switch (props.type) {
            case "text":
                return TextProp(props);
            case "number":
                return NumberProp(props);
            case "file":
                return FileProp(props);
            case "textarea":
                return TextAreaProp(props);
            case "radio":
                return RadioProp(props);
            case "dropdown":
                return DropwDownProp(props);
        }

        throw new Error(
            "If you see this, congrats you won a front row seat to a coup"
        );
    }

    function GiveJudgement(props: CommonFieldProps) {
        if (props.validate) {
            const [judgment, verdict] = validator(props, value);

            if (judgment) {
                return <p className="font-Poppins text-red-700">{verdict}</p>;
            }
        }

        return null;
    }

    return (
        <div
            className={`my-3 p-3 inline-block ${
                fieldsPerLine === 2 ? "w-1/2" : "w-full"
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

                <GiveJudgement {...props} />
            </div>
            <div>
                <WhoThatPokemon {...props} />
            </div>
        </div>
    );
}

export default Field;
