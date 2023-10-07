import React from 'react';
import studentIcon from "../images/studentIcon.svg";
import studyNestLogo from "../images/studynestLogo.svg";

const NarbarComponent = (props) => {
  return (
    <>
    <div class='w-[23%] text-center font-Effra font-normal' >
        <nav class="w-[22rem] h-full flex flex-col justify-between rounded-[0 4rem 4rem 0] shadow-md p-[2rem] fixed z-[10] text-left">
            <div id="nav-top">
                <div class="text-center items-center">

                    <img class='w-[12rem] h-[8rem]' src={studyNestLogo} alt="study nest logo" />
                </div>
                <div class='flex gap-[0.5rem] items-center mb-6'>
                    <img class='w-[4rem] h-[4rem] mx-2' src={studentIcon} alt="student icon" />  
                    <h1 class="text-xl font-Effra font-medium">Peter Smith</h1>
                </div>

                <div id="menu-section" class="flex flex-col gap-[1rem] text-sm">
                    <a>
                        <button class="bg-white hover:bg-blue-700 hover:text-white text-[#8B8B8B] py-2 px-4 rounded-full w-full text-left">Home</button>
                    </a>
                    <a>
                        <button class="bg-white hover:bg-blue-700 hover:text-white text-[#8B8B8B] py-2 px-4 rounded-full w-full text-left">Subjects</button>
                    </a>
                </div>



            </div>

            <div id="menu-section" class="flex flex-col gap-[1rem]">
                <div>
                    <button>Account</button>
                </div>

                <div>
                    <button>Settings</button>
                </div>


                <div>
                    <button>Logout</button>
                </div>
            </div>
        </nav>





    </div>
        
    
    
    </>
  )
}

export default NarbarComponent;