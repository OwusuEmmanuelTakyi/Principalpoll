import React from 'react'

const Tabs = ({name,iconName}) => {
  return (
    <div>
        <div>{iconName}</div>
        <h3>{name}</h3>

    </div>
  )
}

export default Tabs