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
import "react-loading-skeleton/dist/skeleton.css";
import ErrorBoundary, {
    DefaultError,
    EmptyData,
} from "@/components/utils/ErrorBoundary";

export type AvgScore = {
    name: "HOI" | "IEAC" | "Students" | "Peers";
    AvgScore: number;
};

function BarGraph({ data }: { data: AvgScore[] | undefined }) {
    return (
        <div className="mt-5">
            <ResponsiveContainer width={300} height={250}>
                {data ? (
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis dataKey="AvgScore" />
                        <Tooltip />
                        <Legend />
                        <Bar barSize={20} dataKey="AvgScore" fill="#8884d8" />
                    </BarChart>
                ) : (
                    <EmptyData />
                )}
            </ResponsiveContainer>
        </div>
    );
}

export default function ActualBar({ data }: { data: AvgScore[] | undefined }) {
    return (
        <ErrorBoundary fallback={<DefaultError />}>
            <BarGraph data={data} />
        </ErrorBoundary>
    );
}
