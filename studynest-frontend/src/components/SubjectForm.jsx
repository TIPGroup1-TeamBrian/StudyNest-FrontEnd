import React from 'react';
import { useState } from 'react';


const SubjectForm = () => {

        const [isChecked1, setIsChecked1] = useState(false);
        const [isChecked2, setIsChecked2] = useState(false);
        const [isChecked3, setIsChecked3] = useState(false);
        const [isChecked4, setIsChecked4] = useState(false);
        const [isChecked5, setIsChecked5] = useState(false);
        const [isChecked6, setIsChecked6] = useState(false);

        const handleCheckboxChange = (checkboxNumber) => (event) => {
            switch (checkboxNumber) {
                case 1:
                    setIsChecked1(event.target.checked);
                    break;
                case 2:
                    setIsChecked2(event.target.checked);
                    break;
                case 3:
                    setIsChecked3(event.target.checked);
                    break;
                case 4:
                    setIsChecked4(event.target.checked);
                    break;
                case 5:
                    setIsChecked5(event.target.checked);
                    break;
                case 6:
                    setIsChecked6(event.target.checked);
                    break;
               
                default:
                    break;
            }
        };
  return (
    <div class="flex justify-end font-Effra font-normal bg-[#f7f7f7] h-screen">
           
            <div class="w-[77%]  flex-col items-center  bg-[#f7f7f7]">
                <div class="mt-[4rem] mx-[4rem] ">
                    <h1 class="text-4xl my-3 pb-[3rem]">Subjects</h1>
                    <form class="bg-white rounded-3xl w-full h-1/2 p-[4rem] shadow-lg" >
                    <h1 class="mb-[2rem] text-xl">Enrolled Subjects</h1>
                    <div class="flex flex-col">
                        <div class="flex flex-row justify-around mb-3 gap-3">
                        <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] border-gray border-[0.5px] shadow-xl py-2 px-4 rounded-full ${isChecked1 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="art">Art</label>
                                <input type="checkbox" id="art" name="subjects[]" value="art" style={{ display: "none" }} checked={isChecked1} onChange={handleCheckboxChange(1)}></input>

                                <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] border-gray border-[0.5px] shadow-lg py-2 px-4 rounded-full  ${isChecked2 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="biology">Biology</label>
                                <input type="checkbox" id="biology" name="subjects[]" value="biology" style={{ display: "none" }} checked={isChecked2} onChange={handleCheckboxChange(2)}></input>

                                <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] border-gray border-[0.5px] shadow-lg py-2 px-4 rounded-full  ${isChecked3 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="chemistry">Chemistry</label>
                                <input type="checkbox" id="chemistry" name="subjects[]" value="chemistry" style={{ display: "none" }} checked={isChecked3} onChange={handleCheckboxChange(3)}></input>
                        </div>
                        
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
                        <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B] border-gray border-[0.5px] shadow-lg py-2 px-4 rounded-full ${isChecked4 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="mathematics">mathematics</label>
                                <input type="checkbox" id="mathematics" name="subjects[]" value="mathematics" style={{ display: "none" }} checked={isChecked4} onChange={handleCheckboxChange(4)}></input>

                                <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B]  border-gray border-[0.5px] shadow-lg py-2 px-4 rounded-full  ${isChecked5 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="IT">IT</label>
                                <input type="checkbox" id="IT" name="subjects[]" value="IT" style={{ display: "none" }} checked={isChecked5} onChange={handleCheckboxChange(5)}></input>

                                <label class={`w-80 text-center bg-[ffffff] hover:bg-[#176AE6] hover:text-[#ffffff] text-[#8B8B8B]  border-gray border-[0.5px] shadow-lg py-2 px-4 rounded-full  ${isChecked6 ? "bg-[#176AE6] text-white" : 'bg-[ffffff]'}`} for="physics">physics</label>
                                <input type="checkbox" id="physics" name="subjects[]" value="physics" style={{ display: "none" }} checked={isChecked6} onChange={handleCheckboxChange(6)}></input>
                        </div>
                        
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