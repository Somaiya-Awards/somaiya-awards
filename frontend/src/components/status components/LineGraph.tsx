import React, { useMemo } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import ErrorBoundary, { DefaultError, EmptyData } from "../utils/ErrorBoundary";

function LineGraph(props: { data: { [key: string]: number } }) {
    const data = useMemo(() => {
        const a: { date: string; ["Forms Filled"]: number }[] = [];
        Object.keys(props.data).forEach((key) => {
            a.push({ date: key, ["Forms Filled"]: props.data[key] });
        });

        return a;
    }, [props.data]);

    return (
        <div className="flex justify-center p-5 rounded-lg  bg-[#FDFBFA]">
            <ResponsiveContainer width={800} height={250}>
                {!(data && data.length > 0) ? (
                    <EmptyData />
                ) : (
                    <LineChart
                        width={800}
                        height={250}
                        data={data}
                        margin={{ top: 5, bottom: 5 }}
                    >
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            isAnimationActive={true}
                            type={"linear"}
                            dataKey="Forms Filled"
                            stroke="#0c64f2"
                            strokeWidth={2}
                        />
                    </LineChart>
                )}
            </ResponsiveContainer>
        </div>
    );
}

export default function ActualLine(props: { data: number[] }) {
    return (
        <ErrorBoundary fallback={<DefaultError />}>
            <LineGraph {...props} />
        </ErrorBoundary>
    );
}
