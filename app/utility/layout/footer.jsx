"use client"
import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-10 bg-black sm:pt-16 lg:pt-24">
            <div className=" brand-container">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-12 gap-x-8 xl:gap-x-12 bg">
                    <div className="col-span-2 md:col-span-4 xl:pr-8">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-primary">Valarapirai</span>
                        </div>
                        <p className="text-base leading-relaxed text-gray-200 mt-7">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </p>
                        
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-100">Company</p>
                        <ul className="mt-6 space-y-5">
                            <li><Link href="/about" className="flex text-sm text-gray-200 transition-all duration-200 hover:text-primary focus:text-primary">About</Link></li>
                            <li><Link href="/features" className="flex text-sm text-gray-200 transition-all duration-200 hover:text-primary focus:text-primary">Features</Link></li>
                            <li><Link href="/works" className="flex text-sm text-gray-200 transition-all duration-200 hover:text-primary focus:text-primary">Works</Link></li>
                            <li><Link href="/career" className="flex text-sm text-gray-200 transition-all duration-200 hover:text-primary focus:text-primary">Career</Link></li>
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-100">Help</p>
                        <ul className="mt-6 space-y-4">
                           
                            <li><Link href="/terms-and-conditions" className="flex text-sm text-gray-200 transition-all duration-200 hover:text-primary focus:text-primary">Terms & Conditions</Link></li>
                            <li><Link href="/privacy-policy" className="flex text-sm text-gray-200 transition-all duration-200 hover:text-primary focus:text-primary">Privacy Policy</Link></li>
                        </ul>
                    </div>


                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-600">© {currentYear}, All Rights Reserved by Valarpirai</p>

                    <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                        <li>
                            <Link href="#" className="flex items-center justify-center text-primary transition-all duration-200 bg-transparent border border-primary rounded-full w-7 h-7 focus:bg-primary hover:text-white focus:text-white hover:bg-primary hover:border-primary focus:border-primary" aria-label="Twitter">
                                <FaTwitter className="w-4 h-4" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center justify-center text-primary transition-all duration-200 bg-transparent border border-primary rounded-full w-7 h-7 focus:bg-primary hover:text-white focus:text-white hover:bg-primary hover:border-primary focus:border-primary" aria-label="Facebook">
                                <FaFacebookF className="w-4 h-4" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center justify-center text-primary transition-all duration-200 bg-transparent border border-primary rounded-full w-7 h-7 focus:bg-primary hover:text-white focus:text-white hover:bg-primary hover:border-primary focus:border-primary" aria-label="Instagram">
                                <FaInstagram className="w-4 h-4" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center justify-center text-primary transition-all duration-200 bg-transparent border border-primary rounded-full w-7 h-7 focus:bg-primary hover:text-white focus:text-white hover:bg-primary hover:border-primary focus:border-primary" aria-label="LinkedIn">
                                <FaLinkedin className="w-4 h-4" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
