import React, { useState } from 'react';

const UnenrollTeacherComponent = () => {
  const [tutors, setTutors] = useState([
    {
      name: 'Mr. Uzumaki Naruto',
      subject: 'Art',
      enrolled: true,
    },
    {
      name: 'Mr. Uchiha Sasuke',
      subject: 'Biology',
      enrolled: true,
    },
    {
      name: 'Mrs. Haruno Sakura',
      subject: 'Chemistry',
      enrolled: true,
    },
    {
      name: 'Mr. Hashirama Senju',
      subject: 'Computer Science',
      enrolled: true,
    },
    {
      name: 'Mr. Hyuuga Neji',
      subject: 'Economics',
      enrolled: true,
    },
    {
      name: 'Mr. Nara Shikamaru',
      subject: 'Mathematics',
      enrolled: true,
    },
  ]);

  const unenrollTutor = (index) => {
    const updatedTutors = [...tutors];
    updatedTutors[index].enrolled = false;
    setTutors(updatedTutors);
  };

  return (
    <div className="flex justify-end font-Effra font-normal bg-[#f7f7f7]">
      <div className="w-[77%] flex flex-col items-center h-screen bg-[#f7f7f7]">
        <div className="mt-[3rem] m-[2rem] w-[90%]">
          <h1 className="text-4xl my-3 text-[#525252]">UnEnroll Tutors</h1>
          <div className="bg-white rounded-3xl w-full px-[2rem] py-[2rem]">
            <h1 className="text-[#525252] mb-2 text-[20px]">Enrolled Tutors</h1>

            {tutors.map((tutor, index) => (
              tutor.enrolled && (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-3 border-2 border-solid border-[#F7F7F7] rounded-full py-3 px-2 my-4"
                >
                  <div className="w-26 flex h-8 items-center justify-center rounded-md text-[#8B8B8B]">
                    {tutor.name}
                  </div>
                  <div className="w-26 flex h-8 items-center justify-center rounded-md text-[#8B8B8B]">
                    {tutor.subject}
                  </div>
                  <div className="w-26 flex h-8 items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div
                      className="w-[75%] h-[110%] rounded-full text-center py-1 bg-[ffffff] bg-[#176AE6] text-[#ffffff] font-semibold hover:bg-[#363e94] shadow-lg "
                      onClick={() => unenrollTutor(index)}
                    >
                      UNENROLL
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnenrollTeacherComponent;
