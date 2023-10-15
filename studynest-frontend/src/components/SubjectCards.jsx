import React from 'react'

const SubjectCards = () => {
  return (
    <div class="flex justify-end font-Effra font-normal bg-[#f7f7f7]">
           
            <div class="w-[77%] felx flex-col items-center h-screen bg-[#f7f7f7]">
                <div class="my-[3rem] mx-[2rem] mt-[6rem]" >
                    <h1 class="text-5xl font-Effra text-[#525252] font-">Current Subjects</h1>
                    <div class="flex flex-row gap-8 justify-around mt-[5rem]">



                        <div class="w-full border-black shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                            <h1>Subject 1</h1>
                        </div>

                        <div class="w-full border-black shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                            <h1>Subject 2</h1>
                        </div>

                    </div>




                </div>
            
            
            </div>


    </div>
  )
}

export default SubjectCards