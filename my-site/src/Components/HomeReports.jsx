import React from 'react'
import LeftNav from './LeftNav'
import ReportsContent from './ReportsContent'

const HomeReports = () => {
  return (
    <div style={{display:'flex'}}>
        <LeftNav/>
        <ReportsContent/>
    </div>
  )
}

export default HomeReports