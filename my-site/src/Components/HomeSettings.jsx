import React from 'react'
import LeftNav from './LeftNav'
import SettingsContent from './SettingsContent'

const HomeSettings = () => {
  return (
    <div style={{display:'flex'}}>
        <LeftNav/>
        <SettingsContent/>
    </div>
  )
}

export default HomeSettings