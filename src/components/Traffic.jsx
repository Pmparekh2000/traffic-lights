import React from 'react'
import Signal from './Signal'

const Traffic = ({lights=[]}) => {
  return (
    <div className="traffic">
        {
            lights?.map((light) => {
                return (
                    <Signal key={light?.id} light={light}/>
                )
            })
        }
    </div>
  )
}

export default Traffic