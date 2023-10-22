import React from 'react'
import SideNarbarComponent from '../../components/SideNarbarComponent'
import AccountComponent from '../../components/AccountComponent'

const TeacherAccount = () => {
  return (
    <div>
        <SideNarbarComponent type="Teacher"/>
        <AccountComponent type="Teacher"/>
    </div>
  )
}

export default TeacherAccount