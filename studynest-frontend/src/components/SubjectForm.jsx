import React from 'react';


const SubjectForm = () => {
  return (
    <div class="flex justify-end font-Effra font-normal bg-[#f7f7f7]">
           
            <div class="w-[77%] felx flex-col items-center h-screen bg-[#f7f7f7]">
                <div class="mt-[4rem] mx-[4rem]">
                    <h1 class="text-4xl my-3 pb-[3rem]">Subjects</h1>
                    <form class="bg-white rounded-3xl w-full h-1/2 p-[4rem] shadow-lg ">
                    <h1 class="mb-[2rem] text-xl">Enrolled Subjects</h1>
                    <div class="flex flex-col">
                        <div class="flex flex-row justify-around mb-3">
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
   
                        </div>
                        {/* <div class="flex flex-row justify-around mb-3">
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                            
                        </div> */}
                        <div class="text-center mt-[3rem]">
                            <a href="" class="inline-block hover:scale-110 transition-transform duration-300 ease-in-out">
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 w-[10rem] h-[3rem] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UnEnrol</button>
                            </a>
                        </div>
                    </div>
                       
                       
                            
                    </form>

                </div>

                <div>
                <div class="mt-[2rem] mx-[4rem] ">
                    <form class="bg-white rounded-3xl w-full h-1/2 p-[3rem] shadow-xl">
                    <h1 class="mb-[2rem] text-xl">Available Subjects</h1>
                    <div class="flex flex-col">
                        <div class="flex flex-row justify-around mb-3">
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
   
                        </div>
                        {/* <div class="flex flex-row justify-around mb-3">
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                            
                        </div> */}
                        <div class="text-center mt-[3rem]">
                            <a href="" class="inline-block hover:scale-110 transition-transform duration-300 ease-in-out">
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 w-[10rem] h-[3rem] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enrol</button>
                            </a>
                        </div>
                        </div>
                       
                             

                    </form>
                    </div>
                </div>
            </div>
        
            
       
        

       
    </div>
    
  )
}

export default SubjectForm