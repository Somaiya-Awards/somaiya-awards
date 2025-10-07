import React from "react";
import {
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Legend,
    Tooltip,
    Bar,
} from "recharts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export type AvgScore = {
    name: "HOI" | "IEAC" | "Students" | "Peers";
    AvgScore: number;
};

export default function BarGraph({ data }: { data: AvgScore[] | undefined }) {
    return (
        <div className="mt-5">
            {data ? (
                <>
                    <ResponsiveContainer width={300} height={250}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis dataKey="AvgScore" />
                            <Tooltip />
                            <Legend />
                            <Bar
                                barSize={20}
                                dataKey="AvgScore"
                                fill="#8884d8"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </>
            ) : (
                <>
                    <Skeleton height={250} width={300} />
                </>
            )}
        </div>
    );
}
