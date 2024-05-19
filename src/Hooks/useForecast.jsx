//importing the required hooks
import {useState,useEffect} from 'react'
import axios from 'axios';
//creating the custom hook for fetching the Forecast api data
function useForecast({city}){ //mounting
    console.log(city);
    const [forecastloading,setForecastloading]=useState(true)
    const [forecasterror,setForecasterror]=useState(null)
    const [forecastdata,setForecastdata]=useState(null)

//api information
// const apiKey='e0a90b6f2e1c245f892d797c5b908e7d'
const apiKey='bd5e378503939ddaee76f12ad7a97608'
// const apiUrl='https://api.openweathermap.org/data/2.5/weather'
const apiUrl='https://api.openweathermap.org/data/2.5/forecast/daily?'



    useEffect(()=>{
        
        const fetchData=async()=>{
            try {
                setForecastloading(true) //initial loading at time of fetching
                setForecasterror(null) //initially no error
                const response = await axios.get(apiUrl,{
                    params:{
                        q:city,
                        cnt:7,
                        appid:apiKey,
                        // units:'metric'
                        // city,ctn,appid 
                        // appid api 16 days
                    }
                });
                console.log(response);
                setForecastdata(response.data) //passing the data from the result obtained
                // setForecasterror(null)
                // setForecastloading(false)

              } catch (error) {
                // setForecastloading(false)
                setForecasterror(error)


              }finally{
                setForecastloading(false)

              }
        }
        //calling the function
        fetchData()
        return ()=>{} //unmounting cleaning


    },[city])  //updating phase
    return {forecastdata,forecastloading,forecasterror}
}

export default useForecast