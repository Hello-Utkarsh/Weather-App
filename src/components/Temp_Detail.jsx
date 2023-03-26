import React from 'react'
import '../App.css'

export default function Temp_Detail(props) {
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    return (
        <div className='absolute max-sm:w-fit max-[500px]:bottom-10 max-[500px]:w-[70vw]  max-sm:m-auto max-sm:z-10 max-sm:bottom-14 left-[12vw] bottom-[15vh] text-gray-200'>
            <div className='flex items-center max-[500px]:flex max-[500px]:flex-wrap justify-center' >
                <h1 className='text-8xl max-[400px]:text-xl max-[500px]:text-4xl max-lg:text-6xl'>{props.temperature}°</h1>
                <div className='w-fit ml-2 mt-2'>
                    <h2 className='text-5xl max-[400px]:text-base max-[500px]:text-2xl max-lg:text-4xl'>{props.location}</h2>
                    <h3 className='date max-[500px]:text-lg max-[400px]:text-sm'>{props.localtime}</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <span id='atmosphere' className="material-symbols-outlined ml-6 mt-5">
                        rainy
                    </span>
                    <h3 className='text-gray-200 ml-3 mt-2'>{props.condition}</h3>
                </div>
            </div>
        </div>
    )
}
