import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { ReactTyped } from 'react-typed';

function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container m-auto mb-10 px-4 md:px-20'>
                <div className='flex md:flex-row flex-col md:mt-10  '>
                    <div className='md:w-1/2 space-y-2 order-2 md:order-1'>
                    <span>Welcom In My Feed</span>
                    <div className='flex text-2xl space-x-3 md:text-3xl'>
                    <h1>Hello, I'm a </h1>
                    {/* <span className='text-red-600 '>Programmer!</span> */}
                    <ReactTyped
                    className=' font-bold text-red-500'
                    strings={["developer","programmer"]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                    />
                    </div>
                    <p className='text-sm md:text-md text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque similique exercitationem minima quia. Fugit corrupti, quae reiciendis aut totam aspernatur dolore blanditiis animi tenetur maiores hic facere inventore voluptate illum!</p>
                    
                    </div>
                    <div className='md:w-1/2 p-5 order-1'>
                    <img className='rounded-full m-auto hover:scale-105 duration-300 ' src="myPic.jpg" alt="myPic" />
                    </div>
                
                </div>

                <br />
                    {/* icon */}
                    <div className='flex items-center justify-between'>
                        <div className='space-y-3'>
                            <h1>Available on</h1>
                            <ul className='flex space-x-4'>
                                <li><FaGithub className='text-2xl cursor-pointer hover:scale-105 duration-300'/></li>
                                <li><FaLinkedin className='text-2xl cursor-pointer hover:scale-105 duration-300'/></li>
                                <li><FaTelegram className='text-2xl cursor-pointer hover:scale-105 duration-300'/></li>
                            </ul>

                        </div>
                        <div className='space-y-3 mb-10'>
                            <h1>Available on</h1>
                            <ul className='flex space-x-4'>
                                <li><FaGithub className='text-2xl cursor-pointer hover:scale-105 duration-300'/></li>
                                <li><FaLinkedin className='text-2xl cursor-pointer hover:scale-105 duration-300'/></li>
                                <li><FaTelegram className='text-2xl cursor-pointer hover:scale-105 duration-300'/></li>
                            </ul>

                        </div>

                    </div>
                    <hr />
            </div>
           
        </>
    )
}

export default Home
