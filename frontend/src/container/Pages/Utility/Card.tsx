import Wave from "react-wavify";
import { useNavigate, useSearchParams } from "react-router-dom";
import React, { useCallback } from "react";

/** HOI Component */
export default function Card() {
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();
    const backToThePit = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <div>
            <div className="flex items-center mt-[3rem]">
                <div className="mx-auto font-Poppins shadow-xl w-[30%] p-5 rounded-md">
                    <div className="p-4">
                        <h2 className="text-center font-semibold text-2xl text-red-700">
                            {searchParams.get("submitted") ? (
                                <p className="text-green-600">
                                    {searchParams.get("title")}
                                </p>
                            ) : (
                                "ERROR !"
                            )}
                        </h2>
                    </div>
                    <div className="px-4 py-2">
                        <p className="text-justify">
                            {searchParams.get("submitted") ? (
                                " Form submitted successfully. You will be redirected to home page shortly !"
                            ) : (
                                <>
                                    <p>
                                        Failed to submit form. Please check your
                                        form and resubmit. If issue persists
                                        contact Somaiya Awards Team
                                    </p>
                                    <p className="text-red-700 text-center my-5">
                                        Mail us at &lt; itsupport@gmail.com &gt;
                                    </p>
                                </>
                            )}
                        </p>
                    </div>

                    <div className="px-3 flex justify-center">
                        <button
                            className="shadow-md w-28 bg-red-700 text-white text-lg p-3 rounded-xl"
                            onClick={backToThePit}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>

            <Wave
                fill="#b91c1c"
                paused={false}
                className="absolute bottom-0"
                options={{
                    height: 10,
                    amplitude: 50,
                    speed: 0.15,
                    points: 5,
                }}
            />
        </div>
    );
}
