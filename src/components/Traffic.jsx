import React, { useState, useEffect } from 'react'
import Signal from './Signal'

const Traffic = ({lights=[]}) => {
    const [activeSignal, setActiveSignal] = useState(0);

    useEffect(() => {
        const signalInterval = setInterval(() => {
            setActiveSignal((prevValue) => (prevValue+1)%lights?.length);
        },lights[activeSignal]?.delay);

        return () => {
            clearInterval(signalInterval);
        }
    }, [activeSignal]);

  return (
    <div className="traffic">
        {
            lights?.map((light, index) => {
                return (
                    <Signal key={light?.id} light={light} isActive={activeSignal === index}/>
                )
            })
        }
    </div>
  )
}

export default Traffic