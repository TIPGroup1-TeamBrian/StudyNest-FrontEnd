import React from 'react'
import SideNarbarComponent from '../../components/SideNarbarComponent'
import EnrollTeacherComponent from '../../components/EnrollTeacherComponent'

const EnrollTeacher = () => {
  return (
    <div>
        <SideNarbarComponent type="Admin"/>
        <EnrollTeacherComponent/>
    </div>
  )
}

export default EnrollTeacher