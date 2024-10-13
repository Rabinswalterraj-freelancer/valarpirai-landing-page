"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { AiOutlineUser } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { useRouter } from 'next/navigation';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const handleMobileMenuToggle = () => {
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.toggle("hidden");
    };

    const handleScroll = (event, targetId) => {
        
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }else{
            if(targetId !== 'home'){
                router.push(`/#${targetId}`)

            }else{

                router.push('/')
            }

        }
        handleMobileMenuToggle();
    };


    const AddBackground = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', AddBackground);
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', AddBackground);
      };
    }, []);

    // constants/navSections.js
    const navSections = [
        { title: 'Home', id: 'home' },
        { title: 'About', id: 'about' },
        { title: 'Testimonial', id: 'testimonial' },
        { title: 'Contact', id: 'contact' },
    ];


    return (
        <header className={` fixed top-0 left-0 right-0 z-20  transition-colors duration-300 ease-in-out ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
            {/* Header container */}
            <div className="brand-container">
                <div className="">
                    <nav className="flex items-center justify-between h-16">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-primary">Valarapirai</span>
                        </div>

                        {/* Links Section */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            {navSections.map((section) => (
                                <Link
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={(e) => handleScroll(e, section.id)}
                                    className="text-base font-medium text-black"
                                >
                                    {section.title}
                                </Link>
                            ))}
                        </div>

                        {/* Icons Section */}
                        <div className="flex items-center space-x-4">
                            <Link href="#" className="text-black">
                            <AiOutlineUser  size={20}/>
                            </Link>
                            <Link href="#" className="text-black">
                            <TbShoppingBag size={20} />
                            </Link>
                            <Link href="#" className="text-black">
                                <FiSearch size={20} />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button type="button" onClick={handleMobileMenuToggle} className="ml-5 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            <nav id="mobile-menu" className="hidden py-4 bg-white lg:hidden">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>
                        <button type="button" onClick={handleMobileMenuToggle} className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-6">
                        <div className="flex flex-col space-y-2">
                            {navSections.map((section) => (
                                <Link
                                    key={section.id}
                                    href="#"
                                    onClick={(e) => handleScroll(e, section.id)}
                                    className="text-base font-medium text-black"
                                >
                                    {section.title}
                                </Link>
                            ))}
                          
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
