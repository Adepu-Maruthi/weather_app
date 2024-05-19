import React from 'react'

const Dataitem = ({src,primary,secondary}) => {
  return (
    <li className='list-group-item bg-transparent d-flex'>
        <img src={src} alt="" width='20px' height='20px' className='me-3 ' id='g1'/>
        {secondary && <span className='fw-bold text-white'>{secondary}</span>}
        <span className='mx-2 fw-bold text-white'>{primary}</span>
    </li>
  )
}

export default Dataitem
