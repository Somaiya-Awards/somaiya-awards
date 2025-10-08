import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import FormCard from "../../../components/utils/FormCard";
import Teaching from "/teaching.jpeg";
import NonTeaching from "/non-teaching.jpeg";
import Axios, { URL } from "../../../axios";

export default function Student() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // remove token from local storage
        Axios.post(URL.AUTH.LOGOUT);

        Swal.fire({
            title: "Successfully Logged Out",
            icon: "success",
            confirmButtonColor: "rgb(185,28,28)",
        });

        // navigate to login page
        navigate("/auth/login");
    };

    return (
        <div>
            <Navbar />

            <div className="flex justify-between font-Poppins p-10">
                <div>
                    <h2 className="text-xl text-red-800 font-semibold ">
                        Peer Login
                    </h2>
                    <p className="text-sm">
                        {localStorage.getItem("institution")}
                    </p>
                </div>
                <div>
                    <div className="p-2 cursor-pointer" onClick={handleLogout}>
                        <LogoutRoundedIcon />
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-evenly p-10 mb-8">
                <div className="w-[50%]">
                    <FormCard
                        image={Teaching}
                        title="Teaching Feedback"
                        info="Feedbacks for teaching staff for awards nomination"
                        link="/forms/feedback-02"
                    />
                </div>

                <div className="w-[50%]">
                    <FormCard
                        image={NonTeaching}
                        title="Non Teaching Feedback"
                        info="Feedbacks for non-teaching staff for awards nomination"
                        link="/forms/feedback-04"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}
