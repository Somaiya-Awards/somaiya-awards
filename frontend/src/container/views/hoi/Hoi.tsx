import SideBar from "@/components/hoi_components/SideBar";
import FormCards from "@/container/Pages/View Pages/FormCards";
import React from "react";

export default function Hoi() {
    return (
        <div>
            <div className="flex">
                <SideBar />
                <div className='flex flex-col w-full overflow-y-scroll bg-[url("https://www.transparenttextures.com/patterns/washi.png")]'>
                    <FormCards />
                </div>
            </div>
        </div>
    );
}
