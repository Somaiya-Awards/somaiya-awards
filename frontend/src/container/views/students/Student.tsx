import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import FormCard from "../../../components/utils/FormCard";
import React from "react";
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
                        Student Login
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
                        image={"/teaching.jpeg"}
                        title="Teaching Feedback"
                        info="Feedbacks for teaching staff for awards nomination"
                        link="/forms/feedback-01"
                    />
                </div>

                <div className="w-[50%]">
                    <FormCard
                        image={"/non-teaching.jpeg"}
                        title="Non Teaching Feedback"
                        info="Feedbacks for non-teaching staff for awards nomination"
                        link="/forms/feedback-03"
                    />
                </div>
            </div>

            <div className="flex w-full justify-evenly p-10 mb-8">
                <div className="w-[50%]">
                    <FormCard
                        image={"/SportsCoach.jpg"}
                        title="Sports Incharge/ Coach Feedback"
                        info="Feedbacks for sports incharge/ coach for awards nomination"
                        link="/forms/feedback-05"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}
