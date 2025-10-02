import { useState } from "react";
import Navbar from "../../components/Navbar";
import Wave from "react-wavify";
import Field from "../../components/utils/Field";
import axios from "axios";

export default function ForgotPassword() {
    const [email, setEmail] = useState<{
        user_password?: string;
        user_role?: string;
        user_institution?: string;
        user_email_id?: string;
    }>({});
    const [submitted, setSubmitted] = useState(false);
    const [serverResponse, setServerResponse] = useState<{
        message?: string;
        title?: string;
    }>({});

    const handleChange = (event: React.ChangeEvent) => {
        const { value, name } = (event as React.ChangeEvent<HTMLInputElement>)
            .target;
        setEmail({ ...email, [name]: value });
    };

    const handleReset = async () => {
        if (Object.keys(email).length === 0) {
            alert("Fill the field man");
        } else {
            await axios
                .post("/auth/forgot-password", email)
                .then((res) => {
                    const { message, title } = res.data;
                    setSubmitted(true);
                    setServerResponse({ message, title });
                })
                .catch((err) => {
                    const { message, title } = err.response.data;
                    setServerResponse({ message, title });
                    setSubmitted(true);
                });
        }
    };

    return (
        <div>
            <Navbar />

            <div className="flex items-center mt-[3rem]">
                <div className="mx-auto shadow-xl w-[30%] p-5 rounded-md">
                    {!submitted ? (
                        <>
                            <div className="p-3">
                                <h2 className=" font-Poppins text-center text-2xl text-red-700 font-semibold">
                                    Forgot Password
                                </h2>
                            </div>
                            <div className="p-4">
                                <Field
                                    className="w-full"
                                    //@ts-expect-error why we doing this?
                                    page="forgot-password"
                                    placeholder="kjsit_hoi@gmail.com"
                                    title="Email ID"
                                    type="email"
                                    value={email.user_email_id || ""}
                                    onChange={handleChange}
                                    name="user_email"
                                />
                            </div>
                            <div className="p-4 flex justify-center mb-[2rem]">
                                <button
                                    onClick={handleReset}
                                    className="w-[70%] text-white rounded-lg bg-red-700 p-3 hover:bg-red-600"
                                >
                                    Reset Password
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="p-4">
                                <h2 className="text-center text-red-700 font-Poppins text-2xl font-semibold">
                                    {serverResponse["title"] ||
                                        "Request Recieved"}
                                </h2>
                            </div>
                            <div className="p-4 ">
                                <p className="my-4">
                                    {serverResponse["message"]}
                                </p>
                            </div>
                        </>
                    )}
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
