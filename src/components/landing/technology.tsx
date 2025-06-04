import Image from 'next/image';
import React from 'react';
import ParagraphText from '../animations/ParagraphText';
import PulsingCircleGrid from '../animations/pulsingCirlces';

export default function Technology() {
    return (
        <div className="flex lg:flex-row flex-col bg-forrest relative" >
            <div className="absolute top-0 right-0 w-[50vw] h-[600px] max-w-[600px] z-0">
                <PulsingCircleGrid
                    className="absolute top-0 right-0 w-full h-full"
                    squareSize={90}
                    circleSize={15}
                    circleSpacing={30}
                    circleColor="#00B2A9"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-[50vw] h-[200px] max-w-[31vw] z-0 lg:block hidden">
                <PulsingCircleGrid
                    className="absolute top-0 right-0 w-full h-full"
                    squareSize={90}
                    circleSize={15}
                    circleSpacing={30}
                    circleColor="#00B2A9"
                />
            </div>
            <Image
                src={'/images/technology-bg.webp'}
                alt="Technology Background"
                className='min-w-[30vw] max-h-[900px] object-cover lg:block hidden'
                width={500}
                height={900}
                objectFit='cover'
            />
            <Image
                src={'/images/technology-bg-mobile.webp'}
                alt="Technology Background"
                className='w-full lg:h-full h-[180px] object-cover lg:hidden'
                width={500}
                height={900}
                objectFit='cover'
            />
            <div className="p-12 w-full relative z-10">
                <h2 className="font-clash bg-forrest lg:text-[64px] text-[24px] text-white mb-8 lg:leading-[67px] leading-[40px] lg:max-w-[450px] max-w-[164px] font-[500] relaitive z-10 pl-12 lg:pl-0">
                    Technology That Bridges <br /> <span className="text-aqua">Data and Human Behavior</span>
                </h2>
                <div className="bg-darkpurple lg:p-12 p-8 py-12 lg:rounded-tl-[80px] rounded-tl-[40px] lg:rounded-br-[80px] rounded-br-[40px] lg:w-[650px] lg:mx-auto 2xl:mx-0 2xl:mr-auto lg:mt-24 2xl:ml-[450px]  lg:-mb-32">
                    <ParagraphText
                        className="lg:text-[34px] text-[12px] font-[500] lg:leading-[40px]  leading-[18px] text-white font-clash  relaitive z-10"
                        text='Surgo Health&apos;s AI-powered platform uncovers the unseen drivers of health behaviors, transforming complexity into precise, data-driven solutions that remove barriers to care, improve patient engagement, and optimize clinical trials.'
                    />
                </div>
            </div>
        </div>
    );
}