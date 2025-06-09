import React from 'react';
import Image from 'next/image';
import PulsingCircleGrid from '../animations/pulsingCirlces';

export default function Hero() {
    return (

        <div className='max-h-[850px] h-screen grid grid-cols-5 relative lg:p-24 p-14'>
            <div className='absolute -left-10 -top-10 h-full w-[30%] z-10' >
                <PulsingCircleGrid
                    className="absolute top-0 right-0 w-full h-full"
                    squareSize={90}
                    circleSize={15}
                    circleSpacing={30}
                    circleColor="#00B2A9"
                />
            </div>
            <Image
                src='/images/surgo_news_events.webp'
                alt='Hero Background'
                fill
                objectPosition='top'
                className='object-cover object-center'
            />
            <div className='col-span-2' />
            <div className='col-span-3 z-10 flex flex-col justify-end'>
                <h2 className='font-clash lg:text-[78px] text-[38px] text-right text-white mb-8 lg:leading-[82px] leading-[40px] font-[500] relaitive z-10'>
                    From Headlines to <br /><span className='text-purple'>Health Impact</span>
                </h2>
                <p className='text-[24px] leading-[34px] font-alfabet text-white font-[500] text-right max-w-[500px] ml-auto' >
                    Discover the latest news, events, and media coverage featuring Surgo Health. Read about how we are revealing the human side of healthcare with our data and AI powering targeted strategies that improve outcomes and optimize resources.
                </p>
            </div>
        </div>)
}