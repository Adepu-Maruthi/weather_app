import {useState,useEffect} from 'react'
// import Dataitem from './dataitem'
import Datalist from './datalist'


const Weathercomp = ({weatherdata}) => {

  const[currentdatatime,setCurrentdatatime]=useState(new Date())

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentdatatime(new Date())
    },1000);
    return ()=>clearInterval(interval)

  },[])
  // console.log(weatherdata)
  // object disstructing
  const{
    name:city,
    sys:{country},
    weather:[{description,icon}],
    wind:{speed},
    main:{humidity,temp}
  }=weatherdata

  // flag-class 
  const flag=`fi fi-${country.toLowerCase()} mt-3 rounded fs-1`
  // for displaying the speed humidity temp
  const items=[
    {
      src:'https://media4.giphy.com/media/9x8CECKl5NxvNJzmhL/giphy.gif?cid=6c09b952btf816gv9m2kbz3jmws6x1wuc16wkfzxrbu5bklo&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s',
      // addreess of temparature gif
      primary:`${temp.toFixed()}°`,  
      // the code for degree is alt+0176
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
    <section className='container border border-danger  mt-3 '>
      <div className="row" id='g1'>
      <span className='text-center my-3 p-3 fw-bold text-white'>Today {currentdatatime.toLocaleString()}</span>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
          <p>{description}</p>
          </div>   
        <div className="col-sm-12 col-md-4 col-lg-4 col-12 d-flex my-auto">
          <span className={flag}></span>
          <span className='fw-bold'>{city}</span>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <Datalist items={items}/>
        </div>
      </div>
      
    </section>
  )
}

export default Weathercomp