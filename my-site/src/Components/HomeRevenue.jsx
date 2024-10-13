import React from 'react'
import LeftNav from './LeftNav'
import RevenueContent from './RevenueContent'

const HomeRevenue = () => {
  return (
    <div style={{display:'flex'}}>
        <LeftNav/>
        <RevenueContent/>
    </div>
  )
}

export default HomeRevenue