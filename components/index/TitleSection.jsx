import React from 'react'
// import { BiSolidDashboard } from "react-icons/bi";
import dashboard from '/dashboard.svg'
import target from '/target.svg'
import location from '/location.svg'
import map from '/map.svg'
const TitleSection = () => {
    return (
        <>
            <section className='w-full h-fit p-5 xl:h-full flex flex-col'>
                <div className='h-full w-full flex flex-col gap-10 items-center justify-center'>
                    <div className='w-11/12 m-auto xl:m-0 flex flex-col gap-5 items-center justify-center'>
                        <div className='text-xl text-center font-bold xl:text-4xl text-wrap max-w-[800px]'>
                            Revolutionizing Mosquito Control: Innovative Technology for Global Health Protection
                        </div>
                        <p className='font-semibold xl:text-xl text-gray-600'>Smart Control Anti-mosquito Locator and Eliminator</p>
                    </div>
                    <div className='w-4/5 xl:h-2/5 flex'>
                       <div className='w-full xl:w-3/5 h-full grid grid-cols- xl:grid-cols-5 xl:grid-rows-1  gap-5 m-auto'>
                        <div className="xl:col-span-2  flex flex-col gap-5 p-2 xl:p-5 rounded-xl shadow-md overflow-hidden bg-[#EFDEAC]">
                            <div className='m-auto flex justify-center text-center xl:text-start w-full flex-col'>
                                <p className='text-xl'>Scale</p>
                                <p className='text-xl xl:text-4xl font-bold'>Live Dashboard</p>
                            </div>
                            <div className='flex justify-center xl:justify-start'>
                                <figure className='w-full h-full flex items-center justify-start max-w-[100px] xl:max-w-[200px]'>
                                    {/* <BiSolidDashboard className='object-fit w-fit h-full'/> */}
                                    <img src={dashboard} className='w-full h-full object-contain' alt="" />
                                </figure>
                            </div>
                        </div>
                        <div className="xl:col-span-2 flex flex-col gap-5 p-2 xl:p-5 rounded-xl shadow-md overflow-hidden bg-[#E6CA83]">
                            <div className='m-auto flex justify-center text-center xl:text-start w-full  flex-col'>
                                <p className='text-xl'>Scale</p>
                                <p className='text-xl xl:text-4xl font-bold'>Recent Captured</p>
                            </div>
                           <div className='flex justify-center xl:justify-start'>
                                <figure className='w-full h-full flex items-center justify-start max-w-[100px] xl:max-w-[200px]'>
                                    {/* <BiSolidDashboard className='object-fit w-fit h-full'/> */}
                                    <img src={target} className='w-full h-full object-contain' alt="" />
                                </figure>
                           </div>
                        </div>
                        <div className="col-span-2 xl:col-span-1 w-full h-full flex xl:flex-col gap-5">
                                <div className="w-full h-full p-3 flex flex-col shadow-md bg-[#DFECCE]">
                                    <div className="h-full text-center xl:text-start text-sm font-semibold">Active Mosquito Detection and Fumigation System</div>
                                    <div className="h-full flex items-end justify-center xl:justify-start">
                                        <figure className='w-full h-full max-w-20'>
                                            <img src={location} alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="w-full h-full p-3 flex flex-col shadow-md  bg-[#DFECCE]">
                                    <div className="h-full text-sm font-semibold">Map Coverage of the Deployed Devices</div>
                                    <div className="h-full flex items-end justify-center xl:justify-start ">
                                        <figure className='w-full h-full max-w-20'>
                                            <img src={map} alt="" />
                                        </figure>
                                    </div>
                                </div>
                        </div>
                       </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TitleSection;