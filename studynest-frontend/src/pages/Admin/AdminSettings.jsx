import React from 'react'
import SideNarbarComponent from '../../components/SideNarbarComponent'
import SettingsComponent from '../../components/SettingsComponent'

const AdminSettings = () => {
  return (
    <div>
        <SideNarbarComponent type="Admin"/>
        <SettingsComponent type="Admin"/>
    </div>
  )
}

export default AdminSettings