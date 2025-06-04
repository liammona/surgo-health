"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
    {
        id: 1,
        text: 'Optimized outreach and recruitment strategies to improve diversity in multiple myeloma clinical trials',
        image: '/images/success-1.webp',
    },
    {
        id: 2,
        text: 'Increased contraceptive uptake by 300% through AI-driven insights and CHW engagement',
        image: '/images/success-2.webp',
    },
    {
        id: 3,
        text: 'Enhanced CHW efficiency with machine learning-driven segmentation and targeted support tools',
        image: '/images/success-3.webp',
    },
];

const textVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: 50, opacity: 0, transition: { duration: 0.3 } },
};

const imageVariants = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: 200, opacity: 0, transition: { duration: 0.3 } },
};

export default function Success() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <div className="bg-lightgrey flex flex-col items-center relative lg:h-[900px] grid lg:grid-cols-2 relative overflow-hidden">
            <div className="flex lg:px-24 px-8 w-full flex-col gap-4 relative py-12 lg:py-0">
                <h2 className="lg:text-[50px] text-[24px] text-right font-clash text-forrest font-[500] lg::mb-12 lg:leading-[44px] leading-[28px] ml-auto lg:pb-12">
                    Real World Impact
                    <br /><span className="text-aqua">- Success Stories</span>
                </h2>
                <AnimatePresence initial={false} mode="wait">
                    <motion.p
                        key={data[currentIndex].id}
                        className="lg:text-[24px] px-8 lg:px-0 text-[18px] text-forrest font-alfabet font-[500] lg:leading-[34px] leading-[22px] lg:max-w-[25vw]"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {data[currentIndex].text}
                    </motion.p>
                </AnimatePresence>
                <div className="gap-3 pagination lg:hidden flex mt-4 pl-8">
                    {data.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-opacity duration-300 ${currentIndex === index ? 'bg-aqua opacity-100' : 'bg-aqua opacity-30'
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex w-full lg:h-full h-[250px] relative">
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={data[currentIndex].id}
                        className="w-full h-full absolute"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Image
                            src={data[currentIndex].image}
                            alt="Success Background"
                            className='w-full h-full object-cover'
                            objectPosition='bottom'
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="gap-3 pagination absolute left-[calc(24*0.25rem)] bottom-[calc(24*0.25rem)] lg:flex hidden">
                {data.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-opacity duration-300 ${currentIndex === index ? 'bg-aqua opacity-100' : 'bg-aqua opacity-30'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}