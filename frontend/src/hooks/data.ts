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
            const newData = { ...prev };
            newData[name] = actionType === "add" ? value : null;
            return newData;
        });
        setDisplay((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const getData = (): T | null => {
        const response = validator.safeParse(data);

        if (response.success) {
            return response.data as T;
        } else {
            return null;
        }
    };

    return { getData, display, handleChange, data, setData, setDisplay };
}