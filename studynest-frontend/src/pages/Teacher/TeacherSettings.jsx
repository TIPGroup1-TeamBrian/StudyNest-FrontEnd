import React from 'react'
import SideNarbarComponent from '../../components/SideNarbarComponent'
import SettingsComponent from '../../components/SettingsComponent'

const TeacherSettings = () => {
  return (
    <div>
        <SideNarbarComponent type="Teacher"/>
        <SettingsComponent type="Teacher"/>
    </div>
  )
}

export default TeacherSettings