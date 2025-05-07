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
            <div name="Home" className='max-w-screen-2xl container m-auto mb-10 px-4 md:px-20'>
                
                <div className='flex md:flex-row flex-col md:mt-10  '>
                    <div className='md:w-1/2 space-y-2 order-2 md:order-1 text-gray-600'>
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
                        <p className='text-sm md:text-md text-justify text-gray-600'>I love crafting web applications that address actual-world issues. Being skilled in recent web technologies such as React, JavaScript, and Node.js, I aim at developing intuitive and scalable applications. Outside of coding, I am learning new technologies and refining my skills.</p>

                    </div>
                    <div className='md:w-1/2 p-5 order-1'>
                        <img className=' rounded-full m-auto' src="myPic.jpg" alt="myPic" />
                    </div>

                </div>

                <br />
                {/* icon */}
                <div className='flex items-center justify-between mb-10'>
                    <div className='space-y-3'>
                        <h1 className='text-xl font-semibold text-gray-600'>Let's Connect</h1>
                        <ul className='flex space-x-4'>
                            <li>
                                <a href="https://github.com/shanoo7" target="_blank">
                                    <FaGithub className='text-2xl cursor-pointer hover:scale-105 duration-300 text-gray-600' />
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
                        <h1 className="text-xl font-semibold text-gray-600">Get in Touch</h1>
                        <ul className='flex space-x-4'>
                            <li>
                                <a href="shanoo.kumar11@gmail.com" className="text-gray-600">
                                    <MdEmail className='text-2xl cursor-pointer hover:scale-105 duration-300 text-blue-500' />
                                </a>
                            </li>
                            <li>
                                <a href="+919853914057" className="text-gray-600">
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
