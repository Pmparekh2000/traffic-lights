import React from 'react'

const Signal = ({light={}}) => {
    console.log(light);
    
  return (
    <div className='signal' style={{backgroundColor: light?.signalColor}}></div>
  )
}

export default Signal