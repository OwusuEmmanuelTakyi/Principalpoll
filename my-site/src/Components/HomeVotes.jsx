import React from 'react'
import LeftNav from './LeftNav'
import VotesContent from './VotesContent'

const HomeVotes = () => {
  return (
    <div style={{display:'flex'}}>
        <LeftNav/>
        <VotesContent/>
    </div>
  )
}

export default HomeVotes