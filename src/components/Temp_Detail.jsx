import React from 'react'

export default function Temp_Detail(props) {
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    return (
        <div className='absolute left-[12vw] bottom-[15vh] text-gray-200'>
            <div className='flex items-center'>
                <h1 className='text-8xl'>{props.temperature}°</h1>
                <div className='w-[16vw] ml-2 mt-2'>
                    <h2 className='text-5xl'>{props.location}</h2>
                    <h3 id='date'>{props.localtime}</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <span className="material-symbols-outlined ml-2 mt-5" style={{ fontSize: "60px" }}>
                        rainy
                    </span>
                    {/* <img src={props.img} alt="" className = "material-symbols-outlined ml-2 mt-5 h-24"/> */}
                    <h3 className='text-gray-200 ml-3 mt-2'>{props.condition}</h3>
                </div>
            </div>
        </div>
    )
}
