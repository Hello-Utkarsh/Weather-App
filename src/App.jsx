import React, { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Details from './components/Details'
import Temp_Detail from './components/Temp_Detail'


class App extends React.Component {

  weather_details = {
    "location": {
      "name": "Varanasi",
      "region": "Uttar Pradesh",
      "country": "India",
      "lat": 25.33,
      "lon": 83,
      "tz_id": "Asia/Kolkata",
      "localtime_epoch": 1678885044,
      "localtime": "2023-03-15 18:27"
    },
    "current": {
      "last_updated_epoch": 1678884300,
      "last_updated": "2023-03-15 18:15",
      "temp_c": 31.7,
      "temp_f": 89.1,
      "is_day": 0,
      "condition": {
        "text": "Clear",
        "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
        "code": 1000
      },
      "wind_mph": 4.9,
      "wind_kph": 7.9,
      "wind_degree": 329,
      "wind_dir": "NNW",
      "pressure_mb": 1006,
      "pressure_in": 29.7,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 16,
      "cloud": 3,
      "feelslike_c": 29.5,
      "feelslike_f": 85.1,
      "vis_km": 10,
      "vis_miles": 6,
      "uv": 1,
      "gust_mph": 10.3,
      "gust_kph": 16.6
    }
  }

  constructor(){
    super()
    this.state = {
      weather_details: this.weather_details
    }
  }
render(){
  return (
    <div className="App">
      <Temp_Detail temperature={this.weather_details.current.temp_c} localtime = {this.weather_details.location.localtime} location = {this.weather_details.location.name} condition = {this.weather_details.current.condition.text} img = {this.weather_details.current.condition.icon}/>
      <Background />
      <Details cloudy = {this.weather_details.current.cloud} humidity = {this.weather_details.current.humidity} wind_kmp = {this.weather_details.current.wind_kph} precip_mm = {this.weather_details.current.precip_mm}/>
    </div>
  )
  }
}

export default App
