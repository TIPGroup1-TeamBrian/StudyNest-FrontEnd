import React from 'react'

export const RegisterStudent = () => {
    return (
        <div class="bg-[#f7f7f7]">
            <nav>
                <a href="studynest-frontend/src/pages/Home.jsx" class="text-[#587BB4]" >&lt; Back to Homepage</a>
            </nav>
            <div class ="mx-10 px-32">
                <h1 class="text-5xl font-effra text-[#525252] mx-1">Enroll and Start Learning Now!</h1>
            </div>
            <div class="bg-[#f7f7f7] h-screen flex flex-col items-center">
                <div className="border border-solid border-blue-500 w-4/5 h-3/4 bg-[#ffffff] mt-3 rounded-3xl">
                    <div class="px-6 py-3">
                        <form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php">
                            <h2 class="text-2xl font-effra text-[#525252]">Personal Details</h2><br/>
                            
                            <input type="text" name="userName" placeholder='User Name' id="firstName" maxlength="20" required="required" pattern="^[A-Za-z]+$" class="w-5/12 text-center shadow-lg py-2 px-4 rounded-full">
                            </input>
                         
                     
                            <input type="date" name="dob" id="dob" class="shadow-lg py-2 px-4 rounded-full text-center w-5/12 text-[#9CA4B1]"></input> 
                    
                            <br/><br/>
                            <input type="text" name="password" id="password" placeholder='Password' required="required"
                                pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$" class="w-5/12 shadow-lg py-2 px-4 rounded-full text-center"></input>
                            <input type="text" name="repassword" id="repassword" placeholder='Re-type Password' required="required"
                                pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$" class="w-5/12 shadow-lg py-2 px-4 rounded-full text-center"></input>


                            <h2 class="text-2xl font-effra text-[#525252]">Subjects</h2><br/>
                            <p><label class="bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full w-1/2" for="art">Art</label>
                                <input type="checkbox" id="art" name="subjects[]" value="art" style={{ display: "none" }}></input>
                            </p>
                            <p><label class="bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full" for="biology">Biology</label>
                                <input type="checkbox" id="biology" name="subjects[]" value="biology" style={{ display: "none" }}></input>
                            </p>
                            <p><label class="bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full" for="chemistry">Chemistry</label>
                                <input type="checkbox" id="chemistry" name="subjects[]" value="chemistry" style={{ display: "none" }}></input>
                            </p>
                            <p><label class="bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full" for="computerscience">Computer Science</label>
                                <input type="checkbox" id="computerscience" name="subjects[]" value="computerscience" style={{ display: "none" }}></input>
                            </p>
                            <p><label class="bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full" for="economics">Economics</label>
                                <input type="checkbox" id="economics" name="subjects[]" value="economics" style={{ display: "none" }}></input>
                            </p>
                            <div class = "flex flex-col w-screen pl-96">
                            <input type="submit" id="submit" value="Create" class="bg-[ffffff] bg-[#176AE6] text-[#ffffff]  hover:bg-[#363e94] shadow-lg px-4 rounded-full w-1/4 h-9 text-center ml-10"></input>
                            </div>                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterStudent