"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const navLinks = [
    {
        label: "About Us",
        href: "/about",
        dropdown: [
            { label: "Solution 1", href: "/solution1" },
            { label: "Solution 2", href: "/solution2" },
        ],
    },
    {
        label: "News & Events",
        href: "/news",
        dropdown: [
            { label: "Our Story", href: "/our-story" },
            { label: "Leadership", href: "/leadership" },
            { label: "Leadership", href: "/leadership" },
        ],
    },
    {
        label: "Contact",
        href: "/contact",
        dropdown: [],
    },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const navRef = useRef<HTMLElement>(null);

    const toggleDropdown = (label: string | null) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    const mobileMenuVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > scrollPosition) {
                // Scrolling down
                setIsNavVisible(false);
            } else {
                // Scrolling up
                setIsNavVisible(true);
            }

            setScrollPosition(currentScrollPosition);
        };

        const handleMouseOver = () => {
            setIsNavVisible(true);
            clearTimeout(timeoutId);
        };

        const handleMouseLeave = () => {
            timeoutId = setTimeout(() => {
                setIsNavVisible(false);
            }, 2000); // Adjust the delay as needed (e.g., 2000ms = 2 seconds)
        };

        window.addEventListener("scroll", handleScroll);

        if (navRef.current) {
            navRef.current.addEventListener("mouseover", handleMouseOver);
            navRef.current.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (navRef.current) {
                navRef.current.removeEventListener("mouseover", handleMouseOver);
                navRef.current.removeEventListener("mouseleave", handleMouseLeave);
            }
            clearTimeout(timeoutId);
        };
    }, [scrollPosition]);

    return (
        <>
            <motion.nav
                ref={navRef}
                className={`bg-white h-[100px] flex items-center justify-between px-6 lg:px-12 xl:px-32 fixed w-full z-50 shadow-[0_2px_10px_1px_rgba(0,41,37,0.13)] ${isNavVisible ? "top-0" : "-top-[100px]"
                    } transition-all duration-300`}
            >
                <Link href="/" className="flex items-center">
                    <Image src="/svg/logo.svg" alt="Surgo Health Logo" width={220} height={40} />
                </Link>
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-forrest focus:outline-none z-50 relative"
                    aria-label="Toggle Menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </motion.button>
                <div className="hidden lg:flex items-center space-x-8 group" onMouseLeave={() => setActiveDropdown(null)}>
                    {navLinks.map((link) => (
                        <motion.div key={link.label} className="relative hover:!text-purple text-forrest group" onMouseEnter={() => setActiveDropdown(link.label)} >
                            <Link
                                href={link.href}
                                className=" text-center font-clash text-[12px] font-semibold leading-[60px] relative tracking-[0.72px]  transition-colors duration-200 uppercase"
                            >
                                {link.label}
                            </Link>
                            {activeDropdown === link.label && link.dropdown.length > 0 && (
                                <motion.div
                                    className={`absolute right-[50%] translate-x-[50%] top-[50px] mt-2 w-64 p-4 backdrop-blur-[12.5px] bg-[rgba(255, 255, 255, 0.75)]  shadow-lg opacity-100 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto bg-[#FFFFFF90]`}
                                    initial={{ y: -10 }}
                                    animate={{ y: 0, }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    {link.dropdown.map((dropdownLink, index) => (
                                        <Link
                                            key={dropdownLink.label}
                                            href={dropdownLink.href}
                                            className={`text-center block px-4 py-4 text-[14px] text-darkgreen font-clash hover:text-purple transition-colors duration-200 ${link.dropdown.length - 1 === index ? '' : 'border-b-[1px] border-darkgreen]'}`}
                                        >
                                            {dropdownLink.label}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </motion.nav>
            <motion.div
                className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white overflow-y-auto z-40 scrollbar-hidden pt-[100px]`}
                variants={mobileMenuVariants}
                animate={isOpen ? "open" : "closed"}
                initial="closed"
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <div className="flex flex-col h-full items-center">
                    <nav className="flex-grow px-6 flex flex-col items-center relative z-0 w-full">
                        {navLinks.map((link) => (
                            <div key={link.label} className="border-b border-gray-200 w-full">
                                <button
                                    className="w-full text-center py-3 font-clash text-[12px] font-semibold leading-[60px] tracking-[0.72px] text-forrest hover:text-purple transition-colors duration-200 uppercase"
                                    onClick={() => toggleDropdown(link.label)}
                                >
                                    {link.label}
                                </button>
                                {link.dropdown.length > 0 && activeDropdown === link.label && (
                                    <div className="pl-4">
                                        {link.dropdown.map((dropdownLink) => (
                                            <Link
                                                key={dropdownLink.label}
                                                href={dropdownLink.href}
                                                className="block py-3 font-clash text-[12px] font-semibold leading-[60px] tracking-[0.72px] text-forrest hover:text-purple transition-colors duration-200 uppercase"
                                            >
                                                {dropdownLink.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="border-b border-gray-200 w-full flex items-center justify-center min-h-[60px]">
                            <Link href="linkedin.com/company/surgo-health" target="_blank" rel="noopener noreferrer">
                                <Image src="/svg/linkedin.svg" alt="LinkedIn Logo" width={32} height={32} />
                            </Link>
                        </div>
                    </nav>

                    <motion.div
                        className="px-6 py-4"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link href="linkedin.com/company/surgo-health" target="_blank" rel="noopener noreferrer">
                            <Image src="/svg/linkedin.svg" alt="LinkedIn Logo" width={32} height={32} />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}