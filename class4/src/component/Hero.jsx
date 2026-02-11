import React from 'react'
import { MdOutlineImage } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
const Hero = () => {



    return (
        <>
            <div className='px-20  py-10 w-full flex justify-center gap-30 '>
                <div className='w-[50%] '>
                    <h1 className='text-5xl font-semibold mb-5' >
                        Discover the <br />
                        World’s  Top<br /> Designers
                    </h1>
                    <p className='text-zinc-500'>Explore work from the most talented and accomplished <br /> designers ready to take on your next project.</p>
                    <div className='flex mt-10 gap-15  '>
                        <div className='flex gap-1.5 rounded-2xl hover:bg-zinc-500 hover:text-white px-5 py-2 items-center'>
                            <MdOutlineImage/>
                            Shorts</div>
                        <div className='flex gap-1.5 rounded-2xl hover:bg-zinc-500 hover:text-white px-5 py-2 items-center'>
                            <IoPeopleSharp />
                            Designers</div>
                        <div className='flex gap-1.5 rounded-2xl hover:bg-zinc-500 hover:text-white px-5 py-2 items-center'>
                            <CgNotes />
                            Services</div>
                    </div>
                    <div className='w-[500px] rounded-3xl border-2 mt-6 flex items-center : justify-between px-5 py-2 bg-zinc-400 border-white hover:bg-white hover:border-pink-400 '>
                        <input  className=" border-none outline-none w-full" type="text" name="" id=""  placeholder='What type of design are you intersted in?'/>
                        <FaSearch className='text-lg hover:text-pink-400' />

                    </div>
                    <div className='flex gap-2.5 mt-6 '>
                        <div className='font-bold '> Popular :</div>
                        <div className='px-4 py-1 border-gray-500 text-sm font-light rounded-3xl border'>dashboard</div>
                        <div className='px-4 py-1 border-gray-500 text-sm font-light rounded-3xl border'>Landing Page</div>
                        <div className='px-4 py-1 border-gray-500 text-sm font-light rounded-3xl border'>Ecommerce</div>
                        <div className='px-4 py-1 border-gray-500 text-sm font-light rounded-3xl border'>Logo</div>
                    </div>
                </div>
                <div className='w-[50%] '>

                    <div>
                        <video  className='rounded-xl' autoPlay loop src="/video.mp4"></video>
                    </div>
                </div>

            </div>
            <div className='px-20'>
                <div className='rounded-2xl bg-pink-200 flex gap-6  h-20 items-center px-10'>
                <div className='px-5 py-2 border border-pink-500 rounded-3xl'>
                    Start a Project
                </div>
                <p>Tell us what you need and instantly connect with world-class talent ready to work on your project.</p>
            </div>
            </div>
        </>
    )
}

export default Hero