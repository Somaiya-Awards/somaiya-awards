import React, { useState, useCallback } from "react";
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

function Field({
    name,
    type,
    title,
    required,
    //@ts-expect-error Prop mass definiton
    options,
    value,
    validator,
    link,
    //@ts-expect-error Prop mass definiton
    dropOpt,
    //@ts-expect-error Prop mass definiton
    dropdownHiddenItem,
    //@ts-expect-error Prop mass definiton
    accept,
    fieldsPerLine,
    onChange,
}: FieldProp) {
    const [error, setError] = useState<string | null>(null);

    const handleTextChange = useCallback(
        <T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
            event: React.ChangeEvent<T>
        ) => {
            const { name, value } = event.target;
            const res = validator.safeParse(value);
            if (!res.success) {
                setError(
                    z.treeifyError(res.error as z.ZodError).errors.join(", ")
                );
                onChange(name, value, "delete");
            } else {
                setError(null);
                onChange(name, value, "add");
            }
        },
        [onChange, validator]
    );

    const handleFileChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, files } = event.target;
            if (!files) return;
            const file = files[0];
            const res = validator.safeParse(file);
            if (!res.success) {
                setError(
                    z.treeifyError(res.error as z.ZodError).errors.join(", ")
                );
                onChange(name, file, "delete");
            } else {
                setError(null);
                onChange(name, file, "add");
            }
        },
        [onChange, validator]
    );

    const renderInput = () => {
        switch (type) {
            case "text":
            case "email":
            case "date":
            case "password":
                return (
                    <input
                        type={type}
                        name={name}
                        value={value as string}
                        required={required}
                        placeholder={title}
                        className={`focus:outline-none border-b-2 font-Poppins border-gray-700 focus:border-red-700 w-64 focus:w-full transition-all  duration-500`}
                        onChange={handleTextChange}
                    />
                );

            case "number":
                return (
                    <input
                        type="number"
                        name={name}
                        required={required}
                        value={value as string}
                        className={`focus:outline-none  w-64 shadow-lg p-2 border-gray-600 border-b-2 focus:border-red-700`}
                        onChange={handleTextChange}
                    />
                );

            case "textarea":
                return (
                    <textarea
                        name={name}
                        value={value as string}
                        required={required}
                        onChange={handleTextChange}
                        className="border-black p-3 border-2 rounded-lg w-full h-48"
                    />
                );

            case "file":
                return (
                    <>
                        <input
                            type="file"
                            name={name}
                            accept={accept}
                            required={required}
                            onChange={handleFileChange}
                            className={`focus:outline-none color-red-400 }`}
                        />
                        {value instanceof File && (
                            <p className="p-2">
                                <span className="text-red-700 font-semibold font-Poppins">
                                    Selected File:
                                </span>{" "}
                                {value.name}
                            </p>
                        )}
                    </>
                );

            case "radio":
                //@ts-expect-error Map error
                return options!.map((item: string, index: number) => (
                    <div key={index}>
                        <label>
                            <input
                                type="radio"
                                name={name}
                                value={item}
                                checked={value === item}
                                required={required}
                                onChange={handleTextChange}
                            />
                            {item}
                        </label>
                    </div>
                ));

            case "dropdown":
                return (
                    <select
                        name={name}
                        value={value as string}
                        onChange={handleTextChange}
                        required={required}
                        className="w-72 p-2 rounded-md shadow-lg active:shadow-2xl hover:w-full transition-all duration-500 outline-none"
                    >
                        <option hidden>{dropdownHiddenItem}</option>
                        {dropOpt === "single" ? (
                            <option
                                value={
                                    localStorage.getItem("institution") ?? ""
                                }
                            >
                                {localStorage.getItem("institution")}
                            </option>
                        ) : (
                            options.map((opt: string) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))
                        )}
                    </select>
                );

            default:
                return null;
        }
    };

    return (
        <div
            className={`my-3 p-3 inline-block ${
                fieldsPerLine === 2 ? "w-1/2" : "w-full"
            }`}
        >
            <div className="mb-3">
                <label className="font-Poppins">
                    {title}
                    {required && <span className="px-2 text-red-600">*</span>}
                </label>
                {link && (
                    <p>
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-red-700"
                        >
                            Click here
                        </a>
                    </p>
                )}
                {error && <p className="text-red-700">{error}</p>}
            </div>
            {renderInput()}
        </div>
    );
}

function areEqual(prev: FieldProp, next: FieldProp) {
    return (
        prev.value === next.value &&
        prev.validator === next.validator &&
        prev.type === next.type &&
        prev.name === next.name
    );
}

export default React.memo(Field, areEqual);
