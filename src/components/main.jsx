import React from 'react'
import useForecast from '../Hooks/useForecast'
import useWeather from '../Hooks/useWeather'
import Weathercomp from './weathercomp'
import Forecastlist from './forecastlist'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import { TiWeatherStormy } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";



const Main = ({city}) => {
    //passing the city value to custom hook to fetch the data
    const {weatherloading,weathererror,weatherdata}=useWeather({city})
    const {forecastdata,forecastloading,forecasterror} =useForecast({city})
  // }
  console.log(forecastdata)
   if(!city){
     return (
      <section style={{height:'70vh'}} className='container text-center py-3'>
        <p className='fs-3 fw-bold bg-warning w-50 mx-auto'>Please enter a city🌆</p>      
      </section>
     )
   }
   if(weatherloading && forecastloading){
    return (
     <section style={{height:'70vh'}} className='container text-center py-3'>
       <p className='fs-3 fw-bold bg-success w-50 mx-auto'>Loading...</p>
     </section>
    )
  }
  if(weathererror && forecasterror){
    return (
     <section style={{height:'70vh'}} className='container text-center py-3'>
       {/* <h1 className='text-white fw-bold text-capitalize bg-danger p-3 w-50 mx-auto'>City not found🚫</h1> */}
       <p className='fs-3 fw-bold bg-danger w-50 mx-auto'>City not found😑</p>
     </section>
    )
  }


  return (
    <div style={{ height: '100vh' }}>
      <section className='w-100' id='id1'>
        {!weatherloading && !weathererror && (
          <Weathercomp weatherdata={weatherdata} />
        )}
      </section>
      {/* <h1 className='text-center fw-bold my-5  text-white'><img src="https://static.vecteezy.com/system/resources/previews/012/066/499/original/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" width={'100px'} alt="" />FORECAST <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" width={'100px'} alt="" /></h1> */}
      <h1 className='text-center text-white fw-bold'><TiWeatherPartlySunny className='text-warning'/><TiWeatherShower className='text-warning'/> 7Days Forecast<TiWeatherStormy className='text-warning'/><TiWeatherSunny className='text-warning'/></h1>
      <section className='container-fluid mx-3 d-flex flex-wrap'>
        {!forecastloading && !forecasterror && (
          <Forecastlist forecastdata={forecastdata} />
        )}
      </section>
    </div>
   )

 
}

export default Main 

