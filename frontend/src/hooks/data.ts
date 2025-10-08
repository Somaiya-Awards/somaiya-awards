import { useState } from "react";
import z from "zod";

export function useData<T>(validator: z.ZodType) {
    const [data, setData] = useState<T | object>({});
    const [display, setDisplay] = useState<{ [key: string]: string | File }>(
        {}
    );

    const handleChange = (
        name: string,
        value: string | File,
        actionType: "add" | "delete"
    ) => {
        setData((prev) => {
            const newData = {
                ...prev,
            };

            if (actionType === "add") {
                newData[name] = value;
            } else {
                delete newData[name];
            }

            return newData;
        });
        setDisplay((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const getData = (): T | null => {
        const response = validator.safeParse(data);
        return response.success ? (response.data as T) : null;
    };

    return {
        setDisplay,
        getData,
        display,
        handleChange,
        setData,
        data,
    };
}
