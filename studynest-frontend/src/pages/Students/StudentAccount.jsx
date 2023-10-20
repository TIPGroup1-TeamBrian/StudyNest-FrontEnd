import React from 'react'
import SideNarbarComponent from '../../components/SideNarbarComponent';
import AccountComponent from '../../components/AccountComponent';

const StudentAccount = () => {
  


  return (
    <div>
        <SideNarbarComponent type="Student"/>
        <AccountComponent type="Student"/>
    </div>
  )
}

export default StudentAccount;