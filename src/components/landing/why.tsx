"use client";

import React, { useState } from 'react';
import ParagraphText from '../animations/ParagraphText';

export default function Why() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-white lg:p-24 p-14 flex flex-col items-center relative">
            <h2 className="font-clash lg:text-[78px] text-[38px] text-right text-forrest mb-8 lg:leading-[82px] leading-[40px] lg:max-w-[700px] xl:ml-[400px] ] font-[500] relaitive z-10">
                Revealing the <br className="hidden lg:inline" /> <span
                    className={`font-[600] transition-all why-span ${isHovered ? 'why-span-hover' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    WHY
                </span> Behind Health Behaviors with AI
            </h2>
            <ParagraphText
                className="lg:text-[34px] text-[12px] font-[500] lg:leading-[40px] leading-[18px] text-forrest font-clash max-w-[750px] lg:mt-24 xl:pl-32 xl:mr-[400px] mr-12 relaitive z-10"
                text='Better health starts with understanding people. Yet, the "why" behind health behaviors - the beliefs, biases, and barriers shaping decisions - remains a blind spot in healthcare.'
            />
            <img src={'/svg/why-bg.svg'} alt="Why" className="absolute bottom-0 right-0 z-0" />
        </div>
    );
}