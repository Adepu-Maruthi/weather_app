import React from 'react'
import Datalist from './datalist'

const Forcastitem = ({forecastdata}) => {
    console.log(forecastdata)
    const{
      dt,
      temp,
      humidity,
      speed,
      weather:{icon,description}
    }=forecastdata
    // writing the day format
  const day=new Date(dt*1000).toLocaleDateString('en-US',{weekday:'long'})
  const items=[
    {
      src:'https://media4.giphy.com/media/9x8CECKl5NxvNJzmhL/giphy.gif?cid=6c09b952btf816gv9m2kbz3jmws6x1wuc16wkfzxrbu5bklo&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s',
      // addreess of temparature gif
      primary:`${temp.min.toFixed()}°`,  
      // the code for degree is alt+0176
      secondary:`${temp.max.toFixed()}°`
    },
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBawXYXRPU19H0eKrBXGnNRaD_hjr_lIeWrMpshKEHvQ&s',
      primary:`${humidity}%`,
    }, {
      src:'https://i.gifer.com/origin/88/88435799ed98397e83ef7fdb8d1af0b2_w200.gif',
      primary:`${speed.toFixed()}m/s`,
    },
  ]
  return (
    <div className="row">
    <div className="col-sm-6 mb-3 mb-sm-0 shadow" >
      <div className="card mx-2 my-2 " style={{ width: '190px' }} id='g1'>
        <div className="card-body border-top border-start border-warning rounded-start rounded-top">
          <h5 className="card-title text-center text-danger fw-bold">{day}</h5>
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
          <p className='fw-bold'>{description}</p>
          <Datalist items={items} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Forcastitem
