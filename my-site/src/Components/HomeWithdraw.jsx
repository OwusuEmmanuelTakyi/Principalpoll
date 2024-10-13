import React from 'react'
import LeftNav from './LeftNav'
import WithdrawContent from './WithdrawContent'

const HomeWithdraw = () => {
  return (
    <div style={{display:'flex'}}>
        <LeftNav/>
        <WithdrawContent/>
    </div>
  )
}

export default HomeWithdraw