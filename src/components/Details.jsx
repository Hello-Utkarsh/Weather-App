import React from 'react'

export default function Details() {

    return (
        <div className='w-1/4 h-[100vh] absolute top-0 right-0 opacity-60 z-0 bg-gray-800'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className='flex'>
                <input type="text" defaultValue={"Search Loaction"} className='w-[80%] bg-gray-800' />
                <span class="material-symbols-outlined px-[5%] py-4 bg-cyan-200 text-black" style={{fontSize:"60px"}}>
                    search
                </span>
            </div>
        </div>
    )
}
