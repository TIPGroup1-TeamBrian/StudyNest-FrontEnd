import React from 'react';
import StudentIcon from '../images/studentIcon.svg';
import AdminIcon from '../images/adminIcon.svg';
import TeacherIcon from '../images/teacherIcon.svg';
import Arrow from "../images/arrowBack.svg"

const AccountComponent = (props) => {
    let user;
    const studentDefault = {
        icon: StudentIcon,
        firstname: 'Peter',
        lastname: 'Smith',
        email: 'petersmith@gmail.com',
        mobile: '0412345678',
        dob: '01/01/2000',
        gender: 'male'
      };

    const teacherDefault = {    
        icon: TeacherIcon,
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@gmail.com',
        mobile: '0406226789',
        dob: '01/01/1990',
        gender: 'male'
    }

    const adminDefault = {
        icon: AdminIcon,
        firstname: 'Admin',
        lastname: 'Admin',
        email: 'adminaccount@gmail.com',
        mobile: '0400200300',
        dob: '01/01/1990',
        gender:"female"
    }

    switch (props.type) {
        case 'Student':
            user = studentDefault;
            break;
        case "Teacher":
            user = teacherDefault;
            break;
        case "Admin":
            user = adminDefault;
            break;
        default:
            user = studentDefault;
            
    }

    return (
    <div>
        <div class="flex justify-end font-Effra font-normal bg-[#f7f7f7] h-screen">
            
            <div class="w-[77%] flex flex-col bg-[#f7f7f7] mt-[3rem] mx-[2rem]">
            
                <a href="/Student/Home" class="text-[#587BB4]" >
                    <img src={Arrow} alt="Back Arrow" class="inline-block w-6 h-6 mr-2" />
                    Back to Homepage
                </a>
                <div class="my-[3rem] mx-[2rem] mt-[2rem]" >
                    
                    <h1 class="text-5xl font-Effra text-[#525252] my-[2rem]">{props.type} Account</h1>
                    <h2 class="text-2xl font-Effra text-[#525252] mb-[2rem]">My Profile</h2>
                    <div class="flex flex-row gap-8 justify-evenly w-full">
                        <div class="w-38 flex flex-col gap-[2rem] ">
                            <h3 class="text-lg text-center">Profile picture</h3>
                            <img class="w-[10rem] h-[10rem] rounded-full" src={user.icon} alt="sth" />

                            

                        </div>

                        <div class="w-28 flex flex-col gap-[2rem]">
                            <h3 class="text-lg ">First Name</h3>
                            <h3 class="text-lg text-[#587BB4] mb-[4rem]">{user.firstname}</h3>

                            <h3 class="text-lg mt-[2rem]">Gender</h3>
                            <h3 class="text-lg text-[#587BB4] mb-[4rem]">{user.gender}</h3>

                            <h3 class="text-lg mt-[2rem]">Email</h3>
                            <h3 class="text-lg text-[#587BB4] mb-[4rem]">{user.email}</h3>
                        </div>

                        <div class="w-28 flex flex-col gap-[2rem]">
                            <h3 class="text-lg ">Last Name</h3>
                            <h3 class="text-lg text-[#587BB4] mb-[4rem]">{user.lastname}</h3>

                            <h3 class="text-lg mt-[2rem]">Birthday</h3>
                            <h3 class="text-lg text-[#587BB4] mb-[4rem]">{user.dob}</h3>

                            <h3 class="text-lg mt-[2rem]">Mobile</h3>
                            <h3 class="text-lg text-[#587BB4] mb-[4rem]">{user.mobile}</h3>
                        </div>

                        
                    </div>

                    
                    
            
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountComponent;