import React, { useState, useEffect } from "react";
import SideBar1 from "../components/SideBar";
import SideBar2 from "../components/hoi_components/SideBar";
import SideBar3 from "../container/views/ieac/ieacComponents/Sidebar";
import SideBar4 from "../container/views/researchAdmin/components/Sidebar";
import SideBar5 from "../container/views/sportsAdmin/components/Sidebar";
import SideBar6 from "../container/views/studentsAdmin/components/Sidebar";




import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { MoonLoader } from "react-spinners";

const Tutorial = () => {
  const [role, setRole] = useState();
  let ytlink 
//   let sidebar
  const navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem("role") && localStorage.getItem("token")) {
      setRole(localStorage.getItem("role"));
      switch (role) {
        case "ADMIN":
        // sidebar = SideBar1  
        ytlink = 'link 1'
            break;
        case "HOI":
            // sidebar = SideBar2
            ytlink = 'link 2'  
        break;
        case "IEAC":
            // sidebar=SideBar3
            ytlink = 'link 3'  
        break;
        case "PEER":
            ytlink = 'link 4'
            break;
        case "STUDENT":
            ytlink = 'link 5'
            break;
        case "STUDENTS ADMIN":
            // sidebar=SideBar6      
              ytlink = 'link 6'
            break;
        case "SPORTS ADMIN":
            // sidebar=SideBar5
            ytlink = 'link 7'
            break;
        case "RESEARCH ADMIN":
            // sidebar=SideBar4 
            ytlink = 'link 8'
            break;
      }
        }
        else{
            Swal.fire({
                title: "Failed to Login",
                text: "We failed to recognize you! Try relogging",
                imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
                // imageWidth:"150",
                imageHeight: '250',
                confirmButtonColor: "rgb(185,28,28)"
            })
            // navigate('/auth/login')  
    }
  }, []);

  return (
    <div>
      {
        <>
          <div className="flex h-screen">
            {/* <sidebar/> */}
            {
                role==='ADMIN'
                ?
                <SideBar1/>
                :
                role==='HOI'
                ?
                <SideBar2/>
                :
                role==='IEAC'
                ?
                <SideBar3/>
                :
                role==='RESEARCH ADMIN'
                ?
                <SideBar4/>
                :
                role==='SPORTS ADMIN'
                ?
                <SideBar5/>
                :
                role==='STUDENTS ADMIN'
                ?
                <SideBar6/>
                :
                null
            }
            <iframe className="w-full h-full mx-2 " src={ytlink} />
          </div>
        </>
      }
    </div>
  );
};

export default Tutorial;
