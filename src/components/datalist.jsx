import React from 'react'
import Dataitem from './dataitem'

const Datalist = ({items}) => {
  return (
    <ul className='list-group list-group-flush my-2'>
        {items.map((items,i)=>(
            <Dataitem key={i} {...items}/>
        ))}
    </ul>
  )
  
}

export default Datalist
