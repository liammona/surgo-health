import React from 'react';

export default function Hero() {
    return (
        <div className="relative bg-cover bg-center py-24" style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Welcome to Surgo Health
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        Your partner in health and wellness.
                    </p>
                    <button className="bg-forrest text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-darkgreen transition-colors duration-300">
                        Learn More
                    </button>
                </div>
                <div></div>
            </div>
            <div className="absolute top-0 left-0">
            </div>
            <div className="absolute bottom-0 right-0">
                <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="300" fill="#B09DFC" />
                </svg>
            </div>
        </div>
    );
}