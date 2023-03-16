import React, { useState } from 'react'

export default function Details(props) {
    const [search, setsearch] = useState("")
    const handlechange = (event)=>{
        setsearch(event.target.value)
    }
    const search_input = ()=>{
        let inputed_txt = document.getElementById("input_txt")
        if (inputed_txt.value != "" && inputed_txt.value != "Search") {
            setsearch(inputed_txt.value)
            // alert(inputed_txt.value)
            alert(search)
        }
        else{
            inputed_txt.value = "Search"
        }
    }

    return (
        <div className='w-1/4 h-[100vh] absolute top-0 right-0 opacity-60 z-0 bg-gray-800'>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <div>

                <div className='flex pb-3'>

                    <input type="text" id='input_txt' onChange={handlechange} defaultValue={"Search"} className='w-[76%] mx-[6%] text-gray-400 text-lg mt-[6.5vh] bg-gray-800 outline-0 border-b-2 border-gray-400' />

                    <span className="material-symbols-outlined py-[2vh] h-[9vh] justify-center text-center w-[5vw] bg-cyan-200 items-center cursor-pointer text-black" style={{ fontSize: "30px" }} onClick = {search_input} >
                        search
                    </span>

                </div>

                <div className='flex py-3 pb-8 border-b-2 border-gray-400 flex-col text-gray-400 text-lg mx-[6%]'>

                    <h3 className='py-3 text-gray-400 transition duration-500 cursor-pointer w-fit hover:text-gray-100'>Varanasi</h3>

                    <h3 className='py-3 text-gray-400 transition duration-500 cursor-pointer w-fit hover:text-gray-100'>Mumbai</h3>

                    <h3 className='py-3 text-gray-400 transition duration-500 cursor-pointer w-fit hover:text-gray-100'>New York</h3>

                </div>

                <div className='py-11 px-[6%]'>

                    <h2 className='text-white font-bold'>Weather Details</h2>

                    <div className='flex text-gray-400 justify-between w-3/4 pt-12 py-3 text-lg'>
                        <h3>Cloudy</h3>
                        <h3 className='text-white font-bold'>{props.cloudy}%</h3>
                    </div>

                    <div className='flex text-gray-400 justify-between w-3/4 py-3 text-lg'>
                        <h3>Humidity</h3>
                        <h3 className='text-white font-bold'>{props.humidity}%</h3>
                    </div>

                    <div className='flex text-gray-400 justify-between w-3/4 py-3 text-lg'>
                        <h3>Wind</h3>
                        <h3 className='text-white font-bold'>{props.wind_kmp}kmp/h</h3>
                    </div>

                    <div className='flex text-gray-400 justify-between w-3/4 py-3 text-lg'>
                        <h3>Rain</h3>
                        <h3 className='text-white font-bold'>{props.precip_mm}mm</h3>
                    </div>

                </div>

            </div>

        </div>
    )
}
