import React from 'react'
import Forcastitem from './forecastitem'

const Forecastlist = ({forecastdata}) => {
    console.log(forecastdata)
  return (
    <>
        {forecastdata && forecastdata.list.map((item,index)=>(
          <Forcastitem key={index} forecastdata={item}/>
        ))}
    </>
  )
}

export default Forecastlist