import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const HomeTimetableComponent = (props) => {
  const TABLE_HEAD = ["Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const TABLE_ROWS = [
    {
      time:"15:30-16:00",
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "English Literature",
      Friday: ""
    },
    {
      time:"16:00-16:30",
      Monday: "",
      Tuesday: "Chemistry",
      Wednesday: "",
      Thursday: "",
      Friday: ""
    },
    {
      time:"16:30-17:00",
      Monday: "",
      Tuesday: "",
      Wednesday: "Computer Science", 
      Thursday: "",
      Friday: ""
    },
    {
      time:"17:00-17:30",
      Monday: "Mathmatics",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "OOP Programming"

    },
    
  ];

  return (
    <div class="flex justify-end font-Effra font-normal bg-[#f7f7f7]">
      <div class="w-[77%]  flex flex-col h-screen ">
        <div class="m-[3em] mr-[6rem]">
          <h1 class="text-5xl text-[#525252] mb-[3rem]">{`Good day, ${props.name} !`}</h1>
          <div class="w-full h-full bg-white rounded-[48px]   shadow-xl p-[3rem]">
            <h2 class="m-3 text-2xl text-[#525252]">Time Table</h2>
            <table className="w-full min-w-max table-auto text-left font-Effra mt-[3rem] mx-3">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-[#587BB4] font-normal text-lg font-Effra w-[20px] table-fixed"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70 text-center"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ time, Monday, Tuesday, Wednesday, Thursday, Friday }, index) => (
                  <tr key={time} class=" text-lg text-[#525252] text-center font-Effra font-semibold">
                    <td className="py-6">
                      <Typography
                        variant="h6"
                        color="gray"
                        className=" font-Effra text-[#525252] font-normal"
                        
                      >
                        {time}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        as="a"
                        href="#"
                        color="blue-gray"
                        className=""
                      >
                        {Monday}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        as="a"
                        href="#"
                        color="blue-gray"
                        className=""
                      >
                        {Tuesday}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className=""
                      >
                        {Wednesday}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className=""
                      >
                        {Thursday}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className=" text-center"
                      >
                        {Friday}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTimetableComponent;
