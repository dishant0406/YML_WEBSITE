import React from 'react'

function SectionOne() {

  return (
    <div className='panel h-screen w-screen flex items-end justify-center bg-black'>
        <div className='h-[90%] w-full flex flex-col justify-around items-center'>
        <div className='h-[50%] w-full   flex'>
            <div className='w-[50%] flex justify-end items-center'>
                <div className='w-[40%] h-full flex  flex-col justify-center items-end p-4'>
                    <div className='h-[20%] w-[50%] border-t-[3px] border-yellow-400'></div>
                    <div className='h-[35%] w-[15%] border-t-[3px] border-yellow-400'></div>
                </div>
                <div className='w-[50%] h-[70%] flex flex-col justify-around'>
                    <div className='text-white font-proximaRegular text-5xl text-left tracking-[0.7rem]'>PORTFOLIO</div>
                    <div className='text-white font-proximaRegular text-md text-left'>Lörem ipsum monodoskapet fira är dovadat ifall pafiss i jire. Oren nell reana anten sar. Tivis osade. Yligt reabel lånegarderob. </div>
                    <div className='text-slate-400 font-proximaBold text-lg text-left w-[40%]'> WATCH MORE ---</div>
                    <div className='border-t-[3px] border-yellow-300 w-[10%]'> </div>
                </div>
            </div>
            <div className='w-[50%] flex justify-start items-center'>
                <div className='w-[90%] h-full flex justify-around items-center'>
                    <div className='w-[30%] h-[60%] bg-slate-100'></div>
                    <div className='w-[30%] h-[60%] bg-slate-100'></div>
                    <div className='w-[30%] h-[60%] bg-slate-100'></div>
                </div>
               
            </div>
        </div>
       

        <div className='h-[50%] w-full flex justify-center items-center'> 

            <div className=' h-[90%] w-[75%] border border-yellow-300 flex justify-center items-center'>


                <div className=' h-[90%] w-[95%] flex justify-between items-center'>
                    <div className='h-full w-[93.5%] flex flex-col justify-between items-center'>
                        <div className='h-[20%] w-full flex justify-between'>
                            <div className='h-full w-[32.5%] border'></div>
                            <div className='h-full w-[32.5%] border'></div>
                            <div className='h-full w-[32.5%] border'></div>
                        </div>
                        <div className='h-[75%] border w-full'></div>
                    </div>
                    <div id="click-me-container" className='h-full w-[5%] border'>
                        <div id='click-me' className='border h-[53px] w-[200px] origin-center -rotate-90 '>CLICK ME</div>
                    </div>
                </div>

            </div>
          
        </div>
        </div>
    </div>
  )
}

export default SectionOne