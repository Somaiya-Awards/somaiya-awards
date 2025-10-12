import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Download, User, Building2, Award } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BarGraph, { type AvgScore } from "../../admin/components/BarGraph";
import Logo from "/logo.png";
import Axios from "../../../../axios";
import React from "react";

export default function ScoreCard() {
    const cardRef = useRef(null);
    const [data, setData] = useState<AvgScore[]>([]);
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState<number>(0);
    const [name, setName] = useState<string>("N/A");
    const [inst, setInst] = useState<string>("N/A");
    const [feed, setFeed] = useState<number>(0);
    const [final, setFinal] = useState<number>(0);

    const handleDownload = () => {
        const cardElement = cardRef.current;

        if (!cardElement) return;

        html2canvas(cardElement, {
            scale: 2,
            backgroundColor: null,
            logging: false,
            useCORS: true,
        }).then((canvas) => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "scoreCard.png";
            link.click();
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Axios.get(
                    "/admin/data/sports-coach/scorecard",
                    {
                        headers: {
                            "x-application-id":
                                window.location.href.split("/scorecard/")[1],
                        },
                    }
                );

                setLoading(false);
                setName(res.data.name || "N/A");
                setInst(res.data.institute || "N/A");
                setAdmin(res.data.admin_score || 0);
                setFeed(res.data.feed_score || 0);
                setFinal(res.data.final_score || 0);
                setData([
                    { name: "HOI", AvgScore: res.data.admin_score },
                    { name: "Students", AvgScore: res.data.feed_score },
                ]);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-Poppins">
            <div className="w-full max-w-4xl">
                <div
                    ref={cardRef}
                    className="bg-white shadow-2xl rounded-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-red-800 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
                        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                            <img
                                src={Logo}
                                alt="Somaiya Logo"
                                className="h-12 sm:h-16 w-12 sm:w-16 object-contain"
                            />
                            <h1 className="text-lg sm:text-2xl font-bold">
                                Somaiya Awards Scorecard{" "}
                                {new Date().getFullYear()}
                            </h1>
                        </div>
                        <div
                            className="flex items-center text-xs sm:text-sm text-center cursor-pointer bg-white text-red-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-gray-100 transition"
                            onClick={handleDownload}
                        >
                            <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                            Download
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-6 p-6">
                        {/* Personal Details */}
                        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold text-blue-800 border-b pb-2">
                                Personal Details
                            </h2>
                            <div className="space-y-3">
                                <DetailRow
                                    label="Name"
                                    value={name}
                                    loading={loading}
                                    Icon={User}
                                />
                                <DetailRow
                                    label="Institute"
                                    value={inst}
                                    loading={loading}
                                    Icon={Building2}
                                />
                                <DetailRow
                                    label="Award Type"
                                    value={"Inspiring PE Teacher / Coach"}
                                    loading={loading}
                                    Icon={Award}
                                />
                            </div>
                        </div>

                        {/* Scores Section */}
                        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold text-blue-800 border-b pb-2">
                                Performance Scores
                            </h2>
                            <div className="space-y-2">
                                <ScoreRow
                                    label="HOI Average"
                                    value={admin}
                                    loading={loading}
                                />
                                <ApplicationScoreHighlight
                                    label="Application Score (40%)"
                                    value={admin}
                                    loading={loading}
                                />
                                <ScoreRow
                                    label="Student Feedback"
                                    value={feed}
                                    loading={loading}
                                />
                                <FeedbackScoreHighlight
                                    label="360 degree Feedback Score (60%)"
                                    value={feed}
                                    loading={loading}
                                />
                                <FinalScoreHighlight
                                    label="Final Score"
                                    value={final}
                                    loading={loading}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bar Graph Section */}
                    <div className="p-6 bg-gray-100">
                        <BarGraph data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper Components
function DetailRow({
    label,
    value,
    loading,
    Icon,
}: {
    label: string;
    value: string | number;
    loading: boolean;
    Icon: React.JSX.ElementType;
}) {
    return (
        <div className="">
            <div className="flex items-center space-x-3">
                {Icon && <Icon className="text-red-800 w-5 h-5" />}
                <span className="text-red-800 font-semibold text-sm sm:text-base">
                    {label}
                </span>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg m-2">
                {loading ? <Skeleton width={150} /> : value || "N/A"}
            </div>
        </div>
    );
}
type NumberScore = {
    label: string;
    value: number;
    loading: boolean;
};

function ScoreRow({ label, value, loading }: NumberScore) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm text-gray-600">{label}</span>
            <span className="font-semibold text-blue-800 text-sm sm:text-base">
                {loading ? (
                    <Skeleton width={50} />
                ) : value != null ? (
                    value.toFixed(2)
                ) : (
                    "N/A"
                )}
            </span>
        </div>
    );
}

function ApplicationScoreHighlight({ label, value, loading }: NumberScore) {
    return (
        <div className="bg-blue-100 text-blue-800 p-3 rounded-lg flex justify-between items-center">
            <span className="font-medium text-sm sm:text-base">{label}</span>
            <span className="text-lg sm:text-xl font-bold">
                {loading ? (
                    <Skeleton width={50} />
                ) : value != null ? (
                    value.toFixed(2)
                ) : (
                    "N/A"
                )}
            </span>
        </div>
    );
}

function FeedbackScoreHighlight({ label, value, loading }: NumberScore) {
    return (
        <div className="bg-green-100 text-green-800 p-3 rounded-lg flex justify-between items-center">
            <span className="font-medium text-sm sm:text-base">{label}</span>
            <span className="text-lg sm:text-xl font-bold">
                {loading ? (
                    <Skeleton width={50} />
                ) : value != null ? (
                    value.toFixed(2)
                ) : (
                    "N/A"
                )}
            </span>
        </div>
    );
}
function FinalScoreHighlight({ label, value, loading }: NumberScore) {
    return (
        <div className="bg-red-800 text-white p-3 rounded-lg flex justify-between items-center">
            <span className="font-medium text-sm sm:text-base">{label}</span>
            <span className="text-lg sm:text-xl font-bold">
                {loading ? (
                    <Skeleton width={50} />
                ) : value != null ? (
                    value.toFixed(2)
                ) : (
                    "N/A"
                )}
            </span>
        </div>
    );
}
