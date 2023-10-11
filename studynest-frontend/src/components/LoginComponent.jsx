import React from 'react';
import Logo from "../images/school.png";
import { useState } from "react";
import Loginlogo from "../images/Loginlogo.svg";
import NavLogo from "../images/navLogo.svg";

const LoginComponent = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {   
        e.preventDefault();
        console.log(username);
        console.log(password);
    }

    return (
        <div className="font-Effra font-normal text-[#525252]">
      <div id="topbar" className=" px-12 py-4">
        <img className="h-[3rem]" src={NavLogo} alt="sth" /> 
      </div>

      <div id="main" className="h-[90vh] flex flex-row">
        <div
          id="left"
          className=" flex flex-col justify-center items-center bg-[#F7F7F7] w-[50%] bg-cover overflow-hidden"
        >
          
          <img className="block  items-center h-auto" src={Loginlogo} alt="sth" />
        </div>

        <div
          id="right"
          className="flex flex-col justify-center items-center w-[50%] h-[100%]"
        >
          {/* <div class="flex flex-col  w-3/4 h-3/6 rounded-tl-[60px] rounded-br-[60px] bg-[#F2F7FF] justify-center items-center">
            <div class="flex my-4 py-2 px-1">
              <h2 class="text-2xl text-[#587BB4]">Student Login</h2>
            </div>

            <div class="flex  rounded-full  my-3">
              <input />
            </div>

            <div class="flex rounded-full my-3">
              <input />
            </div>
          </div> */}

          <div class="flex flex-col justify-center items-center rounded-tl-[3em] rounded-br-[3em] bg-[#F2F7FF] px-[8%] pt-[5%] gap-[2rem] h-[80%] w-[80%] overflow-hidden shadow-xl">
            <div class="flex flex-row items-center gap-8 mb-10">
              <a href={`/Login${props.role1}`}>
                <button class="bg-[#587bb4] hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                  {props.role1} Login
                </button>

              </a>

              <a href={`/Login${props.role2}`}>
                <button class="bg-[#587bb4] hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                    {props.role2} Login
                  </button> 
              </a>
              
            </div>
            
            <h2 class='text-[#587bb4] text-center text-3xl font-semibold'>{props.currentRole} Login</h2>
            <form class="my-[1rem]" method="post" action=''>
              <div class="">
                <input class="px-[1rem] pt-[1.8rem] pb-[0.8rem] min-w-[25rem] hover:shadow-lg focus:border-solid focus:border-[2px] shadow-lg focus:border-[#587bb4]" id="usernmae" name="username" placeholder="Username" type="text" required />
                <label for="username" data-content="Email" class="flex relative max-h-0 color-[#587bb4] before:inline-block  before:filter-[blur(0)] before:origin-top-left before:left-[1.4rem] before:relative">
                  <span class="hidden">Email</span>
                </label>
              </div>
              <div class="my-[1rem]">
                <input class="px-[1rem] pt-[1.8rem] pb-[0.8rem] min-w-[25rem] hover:shadow-lg focus:border-solid focus:border-[2px] shadow-lg focus:border-[#587bb4]" id="password" name="password" placeholder="Password" type="passowrd" required />
                <label for="username" data-content="Password" class="flex relative max-h-0 color-[#587bb4] before:inline-block  before:filter-[blur(0)] before:origin-top-left before:left-[1.4rem] before:relative">
                  <span class="hidden">Password</span>
                </label>

              </div>
              {/* <div className="flex w-72 flex-col items-end gap-6">
                <Input size="md" label="Input Medium" />
                <Input size="lg" label="Input Large" />
              </div> */}
              
              <div class="">
                <button href="" class="bg-[#587bb4] text-white w-[50%] h-auto py-[15px] px-[20px] cursor-pointer text-center rounded-[3em] block m-auto font-bold text-xl hover:scale-110 transition-transform duration-300 ease-in-out">Login</button>
              </div>
            </form>

              {props.currentRole === "Student"  && <div class="text-lg text-[#587BB4] ">First time here? Enroll now! Just click <a class="underline" href="/login/RegisterStudent">here</a></div>}

          </div>


 
        </div>
      </div>
    </div>
    );
};

export default LoginComponent;
