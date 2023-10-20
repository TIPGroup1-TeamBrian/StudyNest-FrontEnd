import React from 'react'
import SideNarbarComponent from '../../components/SideNarbarComponent'
import SubjectCards from '../../components/SubjectCards'

const StudentSubject = () => {
  const subjectAll = [
    {
      code: 'COMP10001',
      name: 'Introduction to Programming',
      tutor: 'Mr. John Doe',
      time: 'Tue 15:30 - 16:30',
      room: 'Room 101'
    },
   {
      code: 'COMP60004',
      name: 'Creating web applications',
      tutor: 'Mr. Jake Wild',
      time: 'Mon 16:00 - 16:30',
      room: 'Room 201'
    },
    {
      code: 'COMP60011',
      name: 'Technology Inquiry Project',
      tutor: 'Dr. Alfandi Yahya',
      time: 'Fri 16:30 - 17:30',
      room: 'Room 101'
    }
   
    
  ];


  return (
    <div>

        <SideNarbarComponent type="Student"/>
        <SubjectCards subjects={subjectAll}/>
    </div>
  )
}

export default StudentSubject