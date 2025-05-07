import React, { useEffect, useState } from 'react'
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false)
    const [activeLink,setActiveLink] = useState("Home")
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        const scrollFunction = () => {
            if (window.scrollY > 40) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }
        window.addEventListener("scroll", scrollFunction)
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        }

    }, [])

    const navIcon = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "About"
        },
        {
            id: 3,
            name: "Portfolio"
        },
        {
            id: 4,
            name: "Experience"
        },
        {
            id: 5,
            name: "Contact"
        }
    ]
    return (
        <>
            <div className={`max-w-screen-2xl container text-gray-300 py-4 shadow-sm  m-auto px-4 md:px-20  ${sticky && "fixed top-0 left-0 right-0 bg-gray-700  shadow-2xl shadow-gray-600 duration-300 transition-all ease-in-out z-50"}`}>
                <div className='flex justify-between' >
                    <div className='flex gap-2'>
                        <img className='w-12 h-12 rounded-full' src="myPic.jpg" alt="myPic" />
                        <div className=' text-xs lg:text-sm'>
                            <h1 className=''>Shummy Ranjan Shanoo</h1>
                            <p className=' text-gray-300'>Web developer</p>
                        </div>
                    </div> 
                    <div>
                        <ul className='md:flex gap-4 hidden'>
                            {navIcon.map(({ id, name }) => (
                               

                                <li key={id}  className={`${activeLink === name ? "text-[#ff695f]" : ""} hover:scale-105 duration-200 cursor-pointer`} >
                                    <Link
                                    to={name}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                     activeClass="active"
                                    onClick={()=>setActiveLink(name)}
                                >{name}
                                </Link></li>
                            ))}
                        </ul>
                        <div className='md:hidden text-2xl cursor-pointer' onClick={() => setMenu((prev) => !prev)}>{menu ? <FiX /> : <FiAlignRight />}</div>
                    </div>

                </div>
                {
                    menu && <ul className='md:hidden text-xl transform transition-all duration-300 flex flex-col items-center mt-10 justify-center gap-10'>
                        {navIcon.map(({ id, name }) => (
                            <li className='hover:scale-105 duration-200 hover:text-yellow-300 cursor-pointer' key={id}>
                                <Link
                                    to={name}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    activeClass="active"
                                    onClick={() => setMenu(!menu)}
                                >{name}
                                </Link></li>
                        ))}
                    </ul>
                }
            </div>

        </>
    )
}

export default Navbar;
