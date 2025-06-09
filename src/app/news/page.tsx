import Articles from '@/components/news/articles';
import Hero from '@/components/news/landing';
import React from 'react';

export default function LandingPage() {
    return (
        <div className="relative">
            <Hero />
            <Articles />
        </div>
    );
}