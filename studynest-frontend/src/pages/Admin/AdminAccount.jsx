import React from 'react'
import SideNarbarComponent from '../../components/SideNarbarComponent'
import AccountComponent from '../../components/AccountComponent'

const AdminAccount = () => {
  return (
    <div>
        <SideNarbarComponent type="Admin"/>
        <AccountComponent type="Admin"/>
    </div>
  )
}

export default AdminAccount