import React from 'react'
import SideNarbarComponent from '../../components/SideNarbarComponent'
import HomeTimetableComponent from '../../components/HomeTimetableComponent'

const TeacherHome = () => {
  return (
    <div>
        <SideNarbarComponent type="Teacher"/>
        <HomeTimetableComponent name="David James"/>
    </div>
  )
}

export default TeacherHome