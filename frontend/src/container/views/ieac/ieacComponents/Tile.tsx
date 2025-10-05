import React from "react";

export default function Tile(props: {
    title: string;
    info: string;
    image: string | null;
}) {
    return (
        <div className="p-2 font-Poppins">
            <h3 className="text-red-800 font-semibold">{props.title}</h3>

            <p className=" ml-3 my-1 text-sm">{props.info}</p>
            {props.image !== null ? (
                <>
                    <img className="p-1 mix-blend-multiply" src={props.image} />
                </>
            ) : null}
        </div>
    );
}
