import React from 'react'

function Navbar() {
  return (
    <div className='absolute top-0 left-0 w-full h-[10%] z-10 text-white'>
        <div className='w-full h-full flex justify-between items-center'>
            <div className='text-xl font-proximaRegular w-[15%] text-center tracking-widest'>YELLOMONKEY</div>
            <div className='text-xl font-proximaRegular w-[30%] flex justify-around tracking-widest'>
                <div>Work</div>
                <div>Contact</div>
                <div>Client Portal</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar