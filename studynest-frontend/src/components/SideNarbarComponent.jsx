import React from 'react';
import studentIcon from "../images/studentIcon.svg";
import teacherIcon from "../images/teacherIcon.svg";
import adminIcon from "../images/adminIcon.svg";
import studyNestLogo from "../images/studynestLogo.svg";
import { useLocation } from 'react-router-dom';
import accountIcon from "../images/accountIcon.svg";
import settingIcon from "../images/settingIcon.svg"
import logOutIcon from "../images/logout.svg";

const SideNarbarComponent = (props) => {
    const location = useLocation();
    let currentRole;


    switch(props.type){
        case "Student":
            currentRole = {name: "Peter Smith", navitems:["Home", "Subjects", "Enrollment"], icon:studentIcon};
            break;

        case "Teacher":
            currentRole = {name: "Dr. David James", navitems:["Home", "Sessions"], icon:teacherIcon};
            break;

        case "Admin":   
            currentRole = {name: "Steven evans", navitems:["Home", "Analytics", "Enroll", "UnEnroll"], icon:adminIcon};
            break;


        default:
            currentRole = {name: "Peter Smith", navitems:["Home", "Subjects", "Enrollment"], icon:studentIcon};

    }

    

    return (
    <>
    <div class='w-[23%] text-center font-Effra font-normal bg-white' >
        <nav class="w-[22rem] h-full flex flex-col justify-between rounded-3xl shadow-2xl p-[2rem] fixed text-left mx-auto bg-white">
            <div id="nav-top">
                <div class="mb-[4rem]">

                    <img class='w-[12rem] h-[8rem]' src={studyNestLogo} alt="study nest logo" />
                </div>
                <div class='flex gap-[0.5rem] items-center my-6'>
                    <img class='w-[4rem] h-[4rem] mx-2' src={currentRole.icon} alt="student icon" />  
                    <h1 class="text-xl font-Effra font-medium">{currentRole.name}</h1>
                </div>

                <div id="menu-section" class="flex flex-col gap-[1rem] my-[2rem]">
                    {currentRole.navitems.map((item) => (
                        <a href={`/${props.type}/${item}`}>
                            <button class={` ${ location.pathname === `/${props.type}/${item}` ?  "bg-[#587BB4] text-white ": "bg-white hover:scale-110 transition-transform duration-300 ease-in-out text-[#8B8B8B]"}  
                            
                             py-2 pl-11 rounded-full w-full text-left text-lg`}>{item}</button>
                        </a>
                    ))}
               
                    

                    
                </div>

                



            </div>

            <div id="menu-section" class="flex flex-col gap-[1rem]">
                <div>
                    <a href={`/${props.type}Account`}>
                        <img class='w-[1.4rem] h-[1.4rem] inline-block mr-[1rem]' src={accountIcon} alt="account icon" />
                        <button class="text-[#8B8B8B] font-semibold text-lg hover:scale-110 transition-transform duration-300 ease-in-out">Account</button>
                    </a>
                </div>


                <div>
                    <a href={`/${props.type}Settings`}>
                        <img class='w-[1.4rem] h-[1.4rem] inline-block mr-[1rem]' src={settingIcon} alt="setting icon" />
                        <button class="text-[#8B8B8B] font-semibold text-lg hover:scale-110 transition-transform duration-300 ease-in-out">Settings</button>
                    </a>
                </div>


                <div>
                    <a href={`/Login${props.type}`}>
                        <img class='w-[1.4rem] h-[1.4rem] inline-block mr-[1rem]' src={logOutIcon} alt="logout icon" /> 
                        <button class="text-[#8B8B8B] font-semibold text-lg hover:scale-110 transition-transform duration-300 ease-in-out">Logout</button>
                    </a>
                </div>
            </div>
        </nav>

    </div>
        
    
    
    </>
  )
}

export default SideNarbarComponent;