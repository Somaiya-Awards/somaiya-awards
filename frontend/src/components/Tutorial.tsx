import { useState, useEffect } from "react";
import SideBar1 from "@/components/SideBar";
import SideBar2 from "@/components/hoi_components/SideBar";
import SideBar3 from "@/container/views/ieac/ieacComponents/Sidebar";
import SideBar4 from "@/container/views/researchAdmin/components/Sidebar";
import SideBar5 from "@/container/views/sportsAdmin/components/Sidebar";
import SideBar6 from "@/container/views/studentsAdmin/components/Sidebar";
import React from "react";

const Tutorial = () => {
    const [role, setRole] = useState<string>();
    const [ytlink, setLink] = useState<string>("");

    useEffect(() => {
        const role = localStorage.getItem("role")!;

        if (role) {
            setRole(role);
            switch (role) {
                case "ADMIN":
                    // sidebar = SideBar1
                    setLink("link 1");
                    break;
                case "HOI":
                    // sidebar = SideBar2
                    setLink("link 2");
                    break;
                case "IEAC":
                    // sidebar=SideBar3
                    setLink("link 3");
                    break;
                case "PEER":
                    setLink("link 4");
                    break;
                case "STUDENT":
                    setLink("link 5");
                    break;
                case "STUDENTS ADMIN":
                    // sidebar=SideBar6
                    setLink("link 6");
                    break;
                case "SPORTS ADMIN":
                    // sidebar=SideBar5
                    setLink("link 7");
                    break;
                case "RESEARCH ADMIN":
                    // sidebar=SideBar4
                    setLink("link 8");
                    break;
            }
        }
    }, []);

    return (
        <div>
            <div className="flex h-screen">
                {/* <sidebar/> */}
                {role === "ADMIN" ? (
                    <SideBar1 />
                ) : role === "HOI" ? (
                    <SideBar2 />
                ) : role === "IEAC" ? (
                    <SideBar3 />
                ) : role === "RESEARCH ADMIN" ? (
                    <SideBar4 />
                ) : role === "SPORTS ADMIN" ? (
                    <SideBar5 />
                ) : role === "STUDENTS ADMIN" ? (
                    <SideBar6 />
                ) : null}
                <iframe className="w-full h-full mx-2 " src={ytlink} />
            </div>
        </div>
    );
};

export default Tutorial;
