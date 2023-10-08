import React from 'react'

const SubjectForm = () => {
  return (
    <div class="flex justify-end font-Effra font-normal">
           
            <div class="w-[77%] border-black border-[5px] felx flex-col items-center h-screen bg-[#f7f7f7]">
                <div class="mt-[6rem] ml-[4rem]">
                    <h1 class="text-4xl my-3">Subjects</h1>
                    <form class="bg-white rounded-3xl w-full h-1/2 p-[4rem] ">
                    <h1>Enrolled Subjects</h1>
                        <div class="flex flex-row justify-around">
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                         
                        </div>
                       
                             

                    </form>

                </div>

                <div>
                <div class="mt-[2rem] ml-[4rem]">
                    <form class="bg-white rounded-3xl w-full h-1/2 p-[4rem] ">
                    <h1>Available Subjects</h1>
                        <div class="flex flex-row justify-around">
                            <label for="id" hidden="hidden">Computer Science</label>
                            <button type="button" name="cs" id="cs" class="bg-white hover:bg-[#176AE6] hover:text-white text-[#8B8B8B] shadow-lg py-2 px-4 rounded-full ">Computer Science</button>
                         
                        </div>
                       
                             

                    </form>
                    </div>
                </div>
            </div>
        
            
       
        

       
    </div>
    
  )
}

export default SubjectForm