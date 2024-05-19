import React, { useState } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const App = () => {
  const[city,setCity]=useState('')
  console.log(city)
  const handleCity=(e)=>{
    setCity(e)
  }

  return (
  <div id='id1'>
      <Header onValue={handleCity}/>
      <Main city={city}/>
      <Footer/>
  </div>
  )
}


export default App
