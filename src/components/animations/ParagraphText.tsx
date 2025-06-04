"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

interface ParagraphTextProps {
    text: string;
    className?: string;
}

const ParagraphText: React.FC<ParagraphTextProps> = ({ text, className }) => {
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const paragraph = paragraphRef.current;
        if (!paragraph) return;

        let split: SplitText | undefined;
        let anim: gsap.core.Tween | undefined;

        const setupSplits = () => {
            if (split) {
                split.revert();
            }
            if (anim) {
                anim.kill();
            }

            split = new SplitText(paragraph, {
                type: "chars,lines",
                linesClass: "split-line"
            });

            anim = gsap.from(split.chars, {
                scrollTrigger: {
                    trigger: paragraph,
                    start: "top 80%",
                    end: "bottom 40%", // Or your preferred end trigger
                    scroller: window.document.documentElement,
                    scrub: false,
                    toggleActions: "restart reverse restart reverse", // Keeps enter/exit behavior
                },
                duration: 0.5, // Adjusted duration slightly for the blur effect, tweak as needed
                ease: "power1.out", // Changed ease for a potentially smoother blur/fade, tweak as needed
                autoAlpha: 0,          // For fade-in (opacity from 0 to 1)
                filter: 'blur(5px)',   // Start with a 5px blur, animating to blur(0px). Adjust '5px' as you like.
                opacity: 0,
                stagger: 0.015,        // Keeps the character-by-character stagger

                onComplete: () => {
                    split?.revert(); // Revert the split text after animation completes
                },
                onReverseComplete: () => {
                  split?.revert();  // console.log("Animation reverse completed (exited)");
                }
            });
        };

        ScrollTrigger.addEventListener("refreshInit", () => {
            if (split) split.revert();
        });
        ScrollTrigger.addEventListener("refresh", setupSplits);
        setupSplits();

        return () => {
            ScrollTrigger.removeEventListener("refresh", setupSplits);
            ScrollTrigger.removeEventListener("refreshInit", () => {
                if (split) split.revert();
            });
            if (split) {
                split.revert();
            }
            if (anim) {
                anim.kill();
            }
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === paragraph) {
                    trigger.kill();
                }
            });
        };
    }, [text, className]);

    return (
        <p ref={paragraphRef} className={className}>{text}</p>
    );
};

export default ParagraphText;