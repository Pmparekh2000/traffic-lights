import React, { useEffect } from 'react'

const Signal = ({light={}, isActive=false}) => {
  return (
    <div className='signal' style={{backgroundColor: isActive ? light?.signalColor : 'lightgray'}}></div>
  )
}

export default Signal