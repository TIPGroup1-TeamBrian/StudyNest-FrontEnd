import React from 'react';
import { Textarea } from "@material-tailwind/react";
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const SubjectCards = (props) => {
    

    
    return (
        <div class="flex justify-end font-Effra font-normal bg-[#f7f7f7] h-screen">
            
                <div class="w-[77%] flex flex-col items-center bg-[#f7f7f7]">
                    <div class="my-[3rem] mx-[2rem] mt-[6rem]" >
                        <h1 class="text-5xl font-Effra text-[#525252] font-">Current Subjects</h1>
                        
                        
                            

                            <div class="flex flex-row gap-8 justify-around mt-[5rem] ">
                                {props.subjects.map((subject) => (
                                    
                                        <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-3xl hover:scale-105 duration-300'>
                                        
                                            <h2 className='text-2xl font-bold text-center py-8'>{subject.code}</h2>
                                            <p className='text-center text-4xl font-bold'>{subject.name}</p>
                                            <div className='text-center '>
                                                <p className='py-2 border-b mx-8 mt-8'>{subject.tutor}</p>
                                                <p className='py-2 border-b mx-8 '>{subject.time}</p>
                                                <p className='py-2 border-b mx-8 '>{subject.room}</p>
                                                <button className='bg-purple w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black text-center hover:text-[#587BB4] hover:scale-110 duration-300'>Send Message</button>
                                            </div>

                                            <div>
                                                <Textarea variant="outlined" label={`To ${subject.tutor}`} />
                                            </div>
                                
                                        </div>

                                      

                                   
                                ))};

                            </div>  

                        
                        




                    </div>
                
                
                </div>


        </div>
  )

};

export default SubjectCards