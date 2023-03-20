import React, { StrictMode, useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background'
import Details from './components/Details'
import Temp_Detail from './components/Temp_Detail'
import options from './components/apikey'

function App() {

  const [weather_details, setweather_details] = useState(null)
  const [search, setsearch] = useState("Varanasi")

  useEffect(() => {
    const fetchapi = async () => {
      const apiresponse = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`, options)
      const jsonresponse = await apiresponse.json()
      if (apiresponse.status == "200") {
        setweather_details(jsonresponse)
      }
      else{
        alert("Please enter a valid place")
      }
      
      
  
    }
    fetchapi()

  })

 
  const getlocation = (place)=>{
   
    setsearch(place)

  }

  return (
    <div className="App">

      {!weather_details ? (
        <div>
          <h1>no data  found</h1>
        </div>
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
