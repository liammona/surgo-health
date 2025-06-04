"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Define the structure for slide data
interface SlideContent {
    id: number;
    tagText: string;
    title: string;
    paragraphs: string[];
    buttonText: string;
    layout: 'textLeft' | 'textRight'; // To control text/graphic alignment
    graphicColor: string; // Placeholder for abstract graphic
}

// Updated data based on the provided image
const slidesData: SlideContent[] = [
    {
        id: 1,
        tagText: "Technology",
        title: "Data Designed to Humanize Health",
        paragraphs: [
            "Unlock deeper insights into your healthcare data by understanding not only what people do, but why they do it.",
            "BehavioralPulse™ is our proprietary data pipeline designed to quantify the attitudes, barriers, and external forces that shape health behaviors and outcomes for millions of individuals. This unique approach provides a deeper, more precise foundation for deploying interventions that reflect the human side of healthcare.",
        ],
        buttonText: "See the Difference in Our Data",
        layout: "textRight", // Graphic on left, text on right
        graphicColor: "bg-purple-200",
    },
    {
        id: 2,
        tagText: "Technology",
        title: "The Full Context Behind Every Health Decision",
        paragraphs: [
            "Uncover behaviors and social dynamics that shape healthcare decisions at a local level.",
            "Mosaic™ platform, integrates behavioral, clinical, and social data, with a provider ecosystem, to uncover real-world drivers of health behavior at local and individual levels. Mosaic empowers optimized clinical trials, capacity mapping, strengthened provider networks, and tailored community interventions—ensuring solutions meet people where they are.",
        ],
        buttonText: "Explore Mosaic",
        layout: "textLeft", // Text on left, graphic on right
        graphicColor: "bg-teal-200",
    },
    {
        id: 3,
        tagText: "Technology",
        title: "AI Conversations That Reveal What Matters",
        paragraphs: [
            "Traditional surveys miss the nuances behind health decisions, while focus groups offer depth but lack the scale for broad impact.",
            "PersonaLens™ is powered by behavioral science and conversational AI, engaging individuals at scale to capture rich and deeply personal barriers, motivations, and perceptions behind health behaviors.",
        ],
        buttonText: "Get to Know PersonaLens",
        layout: "textRight", // Text on left, graphic on right
        graphicColor: "bg-indigo-200",
    },
];

const FullPageContentSlider: React.FC = () => {
    const mainContainerRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLElement | null)[]>([]);
    const [currentSlide, setCurrentSlide] = useState(1);

    const goToSlide = (index: number) => {
        if (slideRefs.current[index]) {
            gsap.to(window, {
                duration: 0.5,
                scrollTo: { y: slideRefs.current[index], offsetY: 0 },
                ease: "power2.inOut",
            });
        }
    };

    useEffect(() => {
        if (!gsap || !ScrollTrigger) {
            console.error("GSAP or ScrollTrigger not loaded");
            return;
        }

        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        slideRefs.current = [];

        const slides = gsap.utils.toArray<HTMLElement>('.slide-section-item');
        slideRefs.current = slides;

        slides.forEach((slideEl, index) => {
            if (!slideEl) return;

            const tag = slideEl.querySelector('h3');
            const h2 = slideEl.querySelector('h2');
            const pagination = slideEl.querySelector('.pagination');
            const pElements = gsap.utils.toArray<HTMLParagraphElement>('p', slideEl);
            const button = slideEl.querySelector('.slide-button');
            const graphicPlaceholder = slideEl.querySelector('.graphic-placeholder');

            // Elements to animate together for the main content block
            const contentElements = [h2, tag, ...pElements, button].filter(el => el !== null);

            if (contentElements.length === 0) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: slideEl,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    pinSpacing: false,
                    anticipatePin: 1,
                    scrub: 1,
                    onEnter: () => setCurrentSlide(index + 1),
                    onEnterBack: () => setCurrentSlide(index + 1),
                },
            });

            // Initial state for graphic (can be more complex)
            if (graphicPlaceholder) {
                tl.from(graphicPlaceholder, { autoAlpha: 0, scale: 0.8, duration: 0.8 }, 0);
            }

            // 1. Animate tag in
            if (tag) {
                tl.from(tag, { autoAlpha: 0, y: 30, duration: 0.5 }, 0.2); // Start slightly after graphic
            }
            // 2. Animate h2 in
            if (h2) {
                tl.from(h2, { autoAlpha: 0, y: 40, duration: 0.6 }, "-=0.3");
            }
            // 3. Animate p elements in, staggered
            if (pElements.length > 0) {
                tl.from(pElements, { autoAlpha: 0, y: 50, stagger: 0.15, duration: 0.5 }, "-=0.3");
            }
            // 4. Animate button in
            if (button) {
                tl.from(button, { autoAlpha: 0, y: 50, duration: 0.5 }, "-=0.2");
            }

            if (pagination) {
                tl.from(pagination, { autoAlpha: 0, y: 50, duration: 0.5 }, "-=0.2");
            }

            // 5. Hold content
            tl.to({}, { duration: 1 });

            // 6. Animate all text content and button out
            const elementsToAnimateOut = [
                tag,
                h2,
                ...pElements,
                button,
                pagination,
                graphicPlaceholder
            ].filter(el => el !== null);

            if (elementsToAnimateOut.length > 0) {
                tl.to(elementsToAnimateOut, {
                    autoAlpha: 0,
                    y: -50,
                    stagger: 0.3, // Stagger applies to this new order
                    duration: 0.6,
                    ease: "power1.in",
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={mainContainerRef} className="overflow-x-hidden bg-[#F8F8F8] pointer-events-none">
            {slidesData.map((slide) => (
                <section
                    key={slide.id}
                    className={`slide-section-item h-screen w-screen flex items-center justify-center relative px-12`}
                >
                    <div className={`w-full lg:max-w-6xl mx-auto  lg:px-12 lg:grid flex flex-col lg:grid-cols-3 gap-8 md:gap-16 items-center justify-center `}>
                        <div className={`graphic-placeholder-wrapper w-[200px] lg:relative lg:top-auto lg:top-auto lg:left-auto lg:right-auto absolute   lg:rotate-0  ${slide.layout === 'textLeft' ? 'lg::col-start-3 left-0 rotate-270' : 'rotate-[120deg] top-[-120px] right-0'}`}>
                            <div className={`graphic-placeholder`}>
                                <img src={`/svg/technology-slide-${slide.id}.svg`} alt={`Graphic for slide ${slide.id}`} className={`graphic-placeholder  h-full 2xl:min-w-[600px] min-w-[500px]  w-full lg:pb-[300px] ${slide.layout == 'textLeft' ? 'lg:-ml-64' :'2xl:ml-0 lg:ml-22'}`} />
                            </div>
                        </div>
                        <div className={`col-span-2 text-content ${slide.layout === 'textLeft' ? 'lg:col-start-1 lg:row-start-1  lg:text-right lg:-mr-12' : ''}`}>
                            <h3 key={slide.id} className="font-alfabet italic slide-tag text-purple font-semibold text-[18px] mb-2 md:mb-3">
                                {slide.tagText}
                            </h3>
                            <h2 className="2xl:text-[50px] lg:text-[40px] text-[18px] font-clash text-forrest font-[500] mb-4 md:mb-6 2xl:leading-[54px] lg:leading-[44px]">
                                {slide.title}
                            </h2>
                            {slide.paragraphs.map((pText, pIndex) => (
                                <p key={pIndex} className="2xl:text-[18px] lg:text-[14px] text-[12px] font-alfabet mb-3 md:mb-4 leading-relaxed text-forrest">
                                    {pText}
                                </p>
                            ))}
                            <div className={`flex flex-col items-start ${slide.layout === 'textLeft' ? 'lg:items-end' : ''}`}>
                                <button className="!pointer-events-auto slide-button mt-4 md:mt-6 inline-flex items-center text-forrest font-clash gap-4 font-semibold py-2 px-3 border-2 border-purple hover:text-purple transition-colors rounded-[300px] lg:text-[18px] text-[12px] ">
                                    {slide.buttonText}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.9217 20H10.7657L20 10L10.7657 0H7.9217L16.2925 9.06484H0V10.9352H16.2925L7.9217 20Z" fill="#B09DFC" />
                                    </svg>
                                </button>
                                <div className="flex gap-3 pagination mt-12">
                                    {slidesData.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-3 h-3 rounded-full cursor-pointer transition-opacity duration-300 ${currentSlide === index + 1 ? 'bg-aqua opacity-100' : 'bg-aqua opacity-30'
                                                }`}
                                            onClick={() => goToSlide(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
            <section
                className={`slide-section-item h-screen w-screen flex items-center justify-center text-slate-800 relative`}
            ></section>
        </div>
    );
};

export default FullPageContentSlider;