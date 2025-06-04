"use client";

import React from 'react';
import Image from 'next/image'; // Using next/image for optimized images
import ParagraphText from '../animations/ParagraphText';

// Define the structure for each insight block
interface InsightBlock {
    id: number;
    label: string;
    imageUrl: string; // Placeholder for image path
    altText: string;
}

// Data for the blocks
const insightBlocksData: InsightBlock[] = [
    {
        id: 1,
        label: "For Life Sciences",
        imageUrl: "/images/placeholder-life-sciences.jpg", // Replace with your actual image path
        altText: "Scientist working in a lab, representing life sciences",
    },
    {
        id: 2,
        label: "For Social Impact",
        imageUrl: "/images/placeholder-social-impact.jpg", // Replace with your actual image path
        altText: "Person looking thoughtfully at a screen, representing social impact",
    },
    {
        id: 3,
        label: "For Payers & Providers",
        imageUrl: "/images/placeholder-payers-providers.jpg", // Replace with your actual image path
        altText: "Doctor with a stethoscope, representing payers and providers",
    },
    {
        id: 4,
        label: "For Academia",
        imageUrl: "/images/placeholder-academia.jpg", // Replace with your actual image path
        altText: "Person with glasses in front of a computer, representing academia",
    },
];

const Insights: React.FC = () => {
    return (
        <section className="md:p-24 p-8 relative">

            <div className="grid md:grid-cols-6 gap-8">
                <div className="md:col-span-4 col-span-1 text-right">
                    <h3 className="font-alfabet italic slide-tag text-purple font-semibold text-[18px] mb-2 md:mb-3">
                        Solutions
                    </h3>
                    <h2 className="md:text-[50px] text-[24px] font-clash text-forrest font-[500] mb-4 md:mb-12 md:leading-[44px]">
                        Powering Strategy with
                        <br className="md:block hidden"/>
                        <span className="text-aqua"> Actionable Insights</span>
                    </h2>
                </div>
                <div className="md:col-span-2 col-span-1 hidden md:block"></div>
                <div className="md:col-span-3 col-span-1 hidden md:block"></div>
                <div className="md:col-span-3 col-span-1 ">
                    <ParagraphText
                        className="md:text-[24px] text-[12px] md:leading-[34px] leading-[22px] font-alfabet font-[500]"
                        text='Surgo Health&apos;s AI-powered technology translates behavioral complexity into clear, targeted strategies that align with how individuals engage with their health.'
                    />
                </div>

                <div className="md:col-span-3 col-span-1 flex flex-col gap-8 md:mt-12">
                    <img src={'/images/life-sciences.webp'} alt="Life Sciences Background" className=" mdmd:h-full h-full md:w-[580px] w-full object-contain md:ml-auto" />
                    <img src={'/images/payers.webp'} alt="Life Sciences Background" className=" mdmd:h-full h-full md:w-[580px] w-full object-contain md:ml-auto" />
                </div>
                <div className="md:col-span-3 col-span-1 flex flex-col gap-8 md:pt-32 md:mt-12">
                    <img src={'/images/social.webp'} alt="Life Sciences Background" className=" mdmd:h-full h-full md:w-[580px] w-full object-contain " />
                    <img src={'/images/academia.webp'} alt="Life Sciences Background" className="mdmd:h-full h-full md:w-[580px] w-full object-contain " />
                </div>
            </div>
        </section>
    );
};

export default Insights;
