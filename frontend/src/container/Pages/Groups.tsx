import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TableData from "../../data/Institutions/TableData";
import React, { useMemo } from "react";

export default function Groups() {
    const { Group1, Group2, Group3, Group4 } = TableData;
    const numIdx = useMemo(() => {
        const maxLen = Math.max(
            Group1.length,
            Group2.length,
            Group3.length,
            Group4.length
        );
        return Array.from({ length: maxLen }, (_, i) => i + 1);
    }, [Group1.length, Group2.length, Group3.length, Group4.length]);

    return (
        <div>
            <Navbar />
            <div className="p-4 flex justify-center items-center font-Poppins text-md font-semibold">
                <div className="w-full p-5 my-5 ml-5">
                    <table className="custom-table border-2 border-black w-full">
                        <thead>
                            <tr>
                                <th>Group</th>
                                <th className=" p-3 border-2 border-slate-600 bg-teal-200">
                                    Group 1
                                </th>
                                <th className=" p-3 border-2 border-slate-600 bg-indigo-200">
                                    Group 2
                                </th>
                                <th className=" p-3 border-2 border-slate-600 bg-orange-200">
                                    Group 3
                                </th>
                                <th className=" p-3 border-2 border-slate-600 bg-blue-200">
                                    Group 4
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {numIdx.map((_, index) => (
                                <tr
                                    key={index}
                                    className="border-2 border-slate-600 text-center"
                                >
                                    <td className="bg-white border-2 border-slate-600">
                                        <div className="p-3">
                                            {index == 0 ? "Sr.No" : index}
                                        </div>
                                    </td>
                                    <td className="bg-teal-200 border-2 border-slate-600">
                                        <div className="p-3">
                                            {Group1.length > index
                                                ? Group1[index]
                                                : ""}
                                        </div>
                                    </td>
                                    <td className="bg-indigo-200 border-2 border-slate-600">
                                        <div className="p-3">
                                            {Group2.length > index
                                                ? Group2[index]
                                                : ""}
                                        </div>
                                    </td>
                                    <td className="bg-orange-200 border-2 border-slate-600">
                                        <div className="p-3">
                                            {Group3.length > index
                                                ? Group3[index]
                                                : ""}
                                        </div>
                                    </td>
                                    <td className="bg-blue-200 border-2 border-slate-600">
                                        <div className="p-3">
                                            {Group4.length > index
                                                ? Group4[index]
                                                : ""}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}
