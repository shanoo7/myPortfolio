import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { ReactTyped } from 'react-typed';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Home() {
    return (
        <>
            <div name="Home" className='relative max-w-screen-2xl container m-auto mb-10 px-4 md:px-20'>

                <div><img className='' src="https://videos.pexels.com/video-files/6963743/6963743-sd_640_360_25fps.mp4" alt="img" /></div>
                <div className='flex md:flex-row flex-col md:mt-10  '>
                    <div className='md:w-1/2 space-y-2 order-2 md:order-1 text-gray-300'>
                        <span className=' text-xl font-bold text-[#ff695f]'>Welcome to My Portfolio</span>
                        <div className='flex text-2xl space-x-3 md:text-3xl'>
                            <h1 className='text-[#03a4ed]'>Hello, I'm a </h1>
                            {/* <span className='text-red-600 '>Programmer!</span> */}
                            <ReactTyped
                                className=' font-bold text-[#ff695f]'
                                strings={["Coder", "Developer", "Programmer"]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                            />
                        </div>
                        <p className='text-sm md:text-md text-justify text-gray-300'>I'm passionate about building web applications that solve real-world problems. With expertise in modern web technologies like React, JavaScript, and Node.js, I strive to create intuitive and scalable applications. When I'm not coding, you can find me learning new technologies and improving my craft.</p>

                    </div>
                    <div className='md:w-1/2 p-5 order-1'>
                        <img className=' rounded-full m-auto' src="myPic.jpg" alt="myPic" />
                    </div>

                </div>

                <br />
                {/* icon */}
                <div className='flex items-center justify-between mb-10'>
                    <div className='space-y-3'>
                        <h1 className='text-xl font-semibold text-gray-300'>Let's Connect</h1>
                        <ul className='flex space-x-4'>
                            <li>
                                <a href="https://github.com/shanoo7" target="_blank">
                                    <FaGithub className='text-2xl cursor-pointer hover:scale-105 duration-300 text-gray-300' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/shanoo7/" target="_blank">
                                    <FaLinkedin className='text-2xl cursor-pointer hover:scale-105 duration-300 text-blue-700' />
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/Shanoo007" target="_blank">
                                    <FaTelegram className='text-2xl cursor-pointer hover:scale-105 duration-300 text-blue-500' />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className='space-y-3'>
                        <h1 className="text-xl font-semibold text-gray-300">Get in Touch</h1>
                        <ul className='flex space-x-4'>
                            <li>
                                <a href="mailto:your-email@example.com" className="text-gray-300">
                                    <MdEmail className='text-2xl cursor-pointer hover:scale-105 duration-300 text-blue-500' />
                                </a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="text-gray-300">
                                    <FaPhoneAlt className='text-2xl cursor-pointer hover:scale-105 duration-300 text-green-500' />
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>
                <hr />
            </div>

        </>
    )
}

export default Home;
