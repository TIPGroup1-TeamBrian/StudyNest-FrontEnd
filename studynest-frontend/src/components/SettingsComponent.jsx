import React from 'react';
import Arrow from '../images/arrowBack.svg';

const SettingsComponent = () => {
  return (
    <div>
        <div class="flex justify-end font-Effra font-normal bg-[#f7f7f7] h-screen">
            
            <div class="w-[77%] flex flex-col bg-[#f7f7f7] mt-[3rem] mx-[2rem] ">
            
                <a href="/Student/Home" class="text-[#587BB4] " >
                    <img src={Arrow} alt="Back Arrow" class="inline-block w-6 h-6 mr-2" />
                    Back to Homepage
                </a>
                <div class="my-[3rem] mx-[2rem] mt-[2rem]" >
                    
                    <h1 class="text-5xl font-Effra text-[#525252] my-[2rem]">Settings</h1>

                    
                    <div class="bg-[#f7f7f7] h-screen flex flex-col items-center">
                        <div className= "w-[90%] h-auto bg-[#ffffff] mt-3 rounded-3xl shadow-lg">
                            <div class="px-6 py-3 m-4">

                                <form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php" >
                                    <h2 class="text-2xl font-effra text-[#525252] mx-[2rem] mb-[4rem]">Change Personal Details</h2>
                                    <div class="my-[2rem]">
                                        <div class="flex flex-row justify-around">
                                            <input type="text" name="userName" placeholder='User Name' id="firstName" maxlength="20" required="required" pattern="^[A-Za-z]+$" class="w-5/12 text-center shadow-lg py-2 px-4 rounded-full">
                                            </input>


                                            <input type="text" name="dob" id="dob" placeholder='Date of Birth' pattern='^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}$' class="shadow-lg py-2 px-4 rounded-full text-center w-5/12"></input>
                                        </div>
                                        <br />
                                       
                                        <br />
                                        <div class="flex flex-row justify-around">
                                            <input type="email" name="email" id="email" placeholder='Email' required="required" 
                                                class="w-5/12 shadow-lg py-2 px-4 rounded-full text-center"></input>
                                            <input type="text" name="mobile" id="mobile" placeholder='Mobile' required="required" 
                                                class="w-5/12 shadow-lg py-2 px-4 rounded-full text-center"></input>

                                        </div>

                                        <div>
                                            <h2 class="text-center my-[3rem] text-xl text-[#525252]">For password changing request please contact adminstrators for help</h2>
                                        </div>

                                        <div class="text-center">
                                            <div class="inline-block hover:scale-110 transition-transform duration-300 ease-in-out">
                                                <input type="submit" id="submit" value="Submit" class="bg-[ffffff] bg-[#176AE6] text-[#ffffff] font-bold hover:bg-[#363e94] shadow-lg px-4 rounded-full w-[10rem] h-[3rem] text-center "></input>
                                             </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SettingsComponent