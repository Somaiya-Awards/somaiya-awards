import React from "react";
import type { StagesType } from "./utils/data/types";

function returnSteps(value: number, handleClick: React.MouseEventHandler){
    return (
        <div
            onClick={handleClick}
            className="p-3 shadow-xl stages font-Poppins font-semibold active:bg-red-500 active:text-white active:font-bold mx-2 hover:cursor-pointer flex items-center justify-center rounded-full border-4 border-red-600 bg-white  text-center w-[40px] h-[40px]"
        >
            {value}
        </div>
    );
};

export default function FormStages({ stages, onClick }: {stages: StagesType[], onClick: React.MouseEventHandler}){
    return (
        <div className="p-3 mb-[3rem]  mt-[6rem]">
            <div className="w-[70%] mx-auto">
                <div className="relative flex justify-center">
                    <div className=" border-2 border-red-600 absolute w-[90%] top-[50%] -z-10"></div>
                    {stages.map((element) => {
                        return returnSteps(element.value, onClick);
                    })}
                </div>
            </div>
        </div>
    );
};

