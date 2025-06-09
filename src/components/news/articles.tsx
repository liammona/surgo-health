"use client";

import { hover, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

interface ContentItem {
    source: string;
    title: string;
    date: string;
    author?: string;
    location?: string;
}

type ContentData = {
    [key: string]: ContentItem[];
};

interface NewsCardProps extends ContentItem { }

const contentData: ContentData = {
    'In the News': [
        {
            source: 'Yale School of Public Health',
            title: 'Data Scientists Discuss Digital Health Equity at Yale Conference',
            date: 'March 24, 2025',
            author: 'By Jane E. Doe',
        },
        {
            source: 'Jed Foundation',
            title: 'What We Expect in 2025: New Year\'s Trends in Youth Mental Health',
            date: 'Jan 10, 2025',
            author: 'By John MacPhee',
        },
        {
            source: 'Little Black Book',
            title: 'The Ad Council Reminds Parents That "Listening Is a Form of Love" with Wellbeing Campaign',
            date: 'Dec 17, 2024',
            author: 'By McCann North America',
        },
        {
            source: 'The Advocate',
            title: 'Why LGBTQ+ youth have high rate of mental health struggles and how to address them',
            date: 'Dec 11, 2024',
            author: 'By Trudy Ring',
        },
        {
            source: 'Forbes',
            title: 'The Future of AI in Personalized Healthcare Solutions',
            date: 'Nov 05, 2024',
            author: 'By Alex Johnson',
        },
    ],
    'Press Releases': [
        {
            source: 'Surgo Health PR',
            title: 'Surgo Health Announces Groundbreaking Partnership to Advance AI in Medicine',
            date: 'May 15, 2025',
            author: 'Corporate Communications',
        },
        {
            source: 'Surgo Health PR',
            title: 'New Study Reveals Significant Improvement in Patient Outcomes with Surgo\'s Latest Platform',
            date: 'April 02, 2025',
            author: 'Research & Development',
        },
    ],
    'Upcoming Events': [
        {
            source: 'Webinar Series',
            title: 'The Ethics of AI in Healthcare: A Panel Discussion',
            date: 'July 20, 2025',
            location: 'Online',
        },
        {
            source: 'Annual Conference',
            title: 'HealthTech 2025: Innovations for a New Era',
            date: 'September 5-7, 2025',
            location: 'San Francisco, CA',
        },
    ],
    'Past Events': [
        {
            source: 'TechCrunch Disrupt',
            title: 'Startup Battlefield: Healthcare Innovations',
            date: 'October 28, 2024',
            location: 'Virtual Event',
        },
        {
            source: 'Global Health Summit',
            title: 'A Look Back at the 2024 Global Health Summit Highlights',
            date: 'August 19, 2024',
            location: 'Geneva, Switzerland',
        },
    ],
};

const menuItems: string[] = ['In the News', 'Press Releases', 'Upcoming Events', 'Past Events'];

const ArrowIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 transition-transform group-hover:translate-x-1"
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

const NewsCard: React.FC<NewsCardProps> = ({ source, title, date, author, location }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="group cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <p className="text-[18px] font-[400] text-forrest font-alfabet mb-2">{source}</p>
            <h3 className="text-[24px] font-[500] leading-[34px] font-alfabet text-forrest mb-4">{title}</h3>
            <p className="text-[18px] text-forrest mb-6 font-alfabet">
                {date} | {author}
            </p>
            <motion.div
                animate={{
                    backgroundColor: hovered ? "#01BDB2" : "transparent",
                }}
                className="items-center justify-center h-[60px] w-[60px] rounded-[100%]  right-12 bottom-12 border-2 "
                style={{
                    background: hovered ? "#01BDB2" : "transparent",
                    borderColor: hovered ? "#01BDB2" : "#01BDB2",
                    display: "flex",
                }}
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    className={"w-[12px] h-[12px] md:w-[20px] md:h-[20px]"}
                    viewBox="0 0 21 21"
                    fill="none"
                    animate={{
                        rotate: hovered ? -45 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <path
                        d="M8.05207 20.1421H10.8961L20.1304 10.1421L10.8961 0.14209H8.05207L16.4228 9.20693H0.130371V11.0773H16.4228L8.05207 20.1421Z"
                        fill={hovered ? "#fff" : "#01BDB2"}
                    />
                    {hovered && <circle cx="33" cy="33" r="31.5" stroke="#01BDB2" stroke-opacity="0.3" stroke-width="3" />}
                </motion.svg>
            </motion.div>
        </div>
    )
};

const Articles: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('In the News');

    // Helper to scroll main section to top
    const scrollMainToTop = () => {
        const main = document.querySelector('main');
        if (main) {
            const rect = main.getBoundingClientRect();
            const scrollTop = window.scrollY + rect.top;
            window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }
    };

    // Call this when a menu item is clicked
    const handleTabChange = (item: string) => {
        setActiveTab(item);
        setTimeout(scrollMainToTop, 0); // Ensure state updates before scrolling
    };

    const currentContent: ContentItem[] = contentData[activeTab] || [];

    return (
        <div className="bg-white min-h-screen font-sans text-forrest">
            <div className="">
                <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                    <main className="lg:col-span-7 px-6 lg:px-12 xl:px-32 xl:py-20 pr-0 lg:pr-0 xl:pr-0">
                        <header className="mb-12">
                            <h1 className="text-5xl lg:text-[64px] text-forrest font-clash font-[500]">
                                Surgo Health
                                <br />
                                <span className="text-aqua">{activeTab}</span>
                            </h1>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                            {currentContent.map((item, index) => (
                                <NewsCard key={`${activeTab}-${index}`} {...item} />
                            ))}
                        </div>
                    </main>

                    <aside className="lg:col-span-5 max-w-[500px] w-full ml-auto">
                        <div className="sticky top-0">
                            <div className="relative h-screen overflow-hidden flex items-center justify-center flex-col gap-8">
                                <Image
                                    src={'/images/surgo_news_menu.webp'}
                                    alt='menu bg'
                                    fill
                                    objectFit='cover'
                                    className='z-0'
                                    objectPosition='top left'
                                />
                                {menuItems.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => handleTabChange(item)}
                                        className={`rounded-[300px] border-[1px] border-purple flex gap-[16px] p-2 px-6 items-center mx-auto cursor-pointer min-w-[240px] justify-center z-10 ${activeTab == item && 'bg-purple text-white border-[5px] '}`}>
                                        <p className={`font-clash text-[18px] font-[500] text-white text-center ${activeTab == item && '!text-white'}`}>{item}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Articles;
