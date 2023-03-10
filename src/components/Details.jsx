import React from 'react'

export default function Details() {

    return (
        <div className='w-1/4 h-[100vh] absolute top-0 right-0 opacity-60 z-0 bg-gray-800'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <div className='flex'>
                <input type="text" defaultValue={"Search Loaction"} className='w-[83%] ml-[5%] text-gray-400 text-lg my-9 bg-gray-800 outline-0 border-b-2 border-gray-400' />

                <span class="material-symbols-outlined pt-[2.5vh] h-[9vh] justify-center text-center w-[5vw] bg-cyan-200 items-center text-black" style={{ fontSize: "30px" }}>
                    search
                </span>


            </div>
        </div>
    )
}
