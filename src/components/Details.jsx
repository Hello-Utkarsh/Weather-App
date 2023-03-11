import React from 'react'

export default function Details() {

    return (
        <div className='w-1/4 h-[100vh] absolute top-0 right-0 opacity-60 z-0 bg-gray-800'>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <div>

                <div className='flex pb-3'>

                    <input type="text" defaultValue={"Search Loaction"} className='w-[76%] mx-[6%] text-gray-400 text-lg mt-9 bg-gray-800 outline-0 border-b-2 border-gray-400' />

                    <span class="material-symbols-outlined pt-[2.5vh] h-[9vh] justify-center text-center w-[5vw] bg-cyan-200 items-center text-black" style={{ fontSize: "30px" }}>
                        search
                    </span>

                </div>

                <div className='flex py-3 pb-8 border-b-2 border-gray-400 flex-col text-gray-400 text-lg mx-[6%]'>

                    <h3 className='py-3 text-gray-400 transition duration-500 cursor-pointer w-fit hover:text-gray-600'>Varanasi</h3>

                    <h3 className='py-3 text-gray-400 transition duration-500 cursor-pointer w-fit hover:text-gray-600'>Mumbai</h3>

                    <h3 className='py-3 text-gray-400 transition duration-500 cursor-pointer w-fit hover:text-gray-600'>New York</h3>

                </div>

                <div className='py-11 px-[6%]'>

                    <h2 className='text-white font-bold'>Weather Details</h2>

                    <div className='flex text-gray-400 justify-between w-3/4 pt-12 py-3 text-lg'>

                        <h3>Cloudy</h3>
                        <h3 className='text-white font-bold'>86%</h3>

                    </div>

                    <div className='flex text-gray-400 justify-between w-3/4 py-3 text-lg'>

                        <h3>Humidity</h3>
                        <h3 className='text-white font-bold'>62%</h3>

                    </div>

                    <div className='flex text-gray-400 justify-between w-3/4 py-3 text-lg'>

                        <h3>Wind</h3>
                        <h3 className='text-white font-bold'>8km/h</h3>

                    </div>

                    <div className='flex text-gray-400 justify-between w-3/4 py-3 text-lg'>

                        <h3>Rain</h3>
                        <h3 className='text-white font-bold'>8mm</h3>

                    </div>

                </div>

            </div>

        </div>
    )
}
