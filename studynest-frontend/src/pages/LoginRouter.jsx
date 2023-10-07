import React from "react";
import Logo from "../images/school.png";
import LoginComponent from "../components/LoginComponent";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//import { Input } from "@material-tailwind/react";



const LoginRouter = () => {

  
  return (  
    <>
    <Routes>
        <Route path='/LoginStudent' element={<LoginComponent role1="Teacher" role2="Admin" currentRole="Student"/>}/>
        <Route path="/LoginTeacher" element={<LoginComponent role1="Student" role2="Admin" currentRole="Teacher"/>}/>
        <Route path="/LoginAdmin" element={<LoginComponent role1="Student" role2="Teacher" currentRole="Admin"/>}/>


      
    </Routes>
    
    
    
    </>
    
    
  );
};

export default LoginRouter;
