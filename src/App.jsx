import React, { StrictMode, useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background'
import Details from './components/Details'
import Temp_Detail from './components/Temp_Detail'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b29b1c7b8fmsh7f197b82064d086p15053djsn4f67bc342095',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

function App() {

  const [weather_details, setweather_details] = useState(null)
  const [search, setsearch] = useState("Varanasi")

  useEffect(() => {
    const fetchapi = async () => {
      const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`, options)
      const jsonresponse = await response.json()
      setweather_details(jsonresponse)
  
    }

    fetchapi()
    // getlocation()

  })

 
  const getlocation = (place)=>{
   
    setsearch(place)

  }

  return (
    <div className="App">

      {!weather_details ? (
        <h1>No Data Found</h1>
      ) : (
        <div>
          <Temp_Detail temperature={weather_details.current.temp_c} location = {weather_details.location.name} localtime = {weather_details.location.localtime} condition = {weather_details.current.condition.text}/>
          <Background />
          <Details getlocation = {getlocation} cloudy = {weather_details.current.cloud} humidity = {weather_details.current.humidity} wind_kmp = {weather_details.current.wind_kmp} precip_mm = {weather_details.current.precip_mm} lat = {weather_details.location.lat} log = {weather_details.location.lon}/>
        </div>
      )}



    </div>
  )



}

export default App
