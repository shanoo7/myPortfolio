import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
    return (
        <>

            <footer data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <div className='max-w-screen-2xl container m-auto mt-5 px-4 md:px-20 text-gray-500'>
                    <hr />
                    <div className='flex flex-col items-center my-5'>
                        <div className='flex items-center justify-center space-x-5'>
                            <ul className='flex space-x-4'>
                                <li>
                                    <a href="https://github.com/shanoo7" target="_blank">
                                        <FaGithub className='text-2xl cursor-pointer hover:scale-105 duration-300 text-gray-500' />
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
                        <div className='my-5 text-sm border-t border-gray-500 py-2 px-8 flex flex-col items-center justify-center'>
                            <p>&copy; 2025 my portfolio. All rights reserved.</p>
                            <p className=''>shummy ranjan shanoo</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
