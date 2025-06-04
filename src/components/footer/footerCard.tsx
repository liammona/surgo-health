
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FooterCard {
    heading: string;
    content: string;
    onClick?: () => void;
}

export default function FooterCard({ heading, content, onClick }: FooterCard) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            className="bg-darkgreen p-12 rounded-[0px 80px] w-full relative lg:min-h-[420px] min-h-[320px] cursor-pointer"
            style={{ borderRadius: "0px 80px" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
            animate={{
                scale: hovered ? 1.01 : 1,
            }}
        >
            <motion.h3
                className="lg:text-[34px] text-white font-[500] font-clash"
                style={{
                    transformOrigin: "top left",
                }}
                animate={{
                    scale: hovered ? .95 : 1,
                }}
            >{heading}</motion.h3>
            <motion.p
                className="text-[18px] leading-[28px] text-white font-artford mt-4"
                style={{
                    transformOrigin: "top left",
                }}
                animate={{
                    scale: hovered ? .95 : 1,
                }}
            >
                {content}
            </motion.p>
            <motion.div
                animate={{
                    backgroundColor: hovered ? "#01BDB2" : "transparent",
                }}
                className="items-center justify-center h-[60px] w-[60px] rounded-[100%] absolute right-12 bottom-12 border-2 "
                style={{
                    background: hovered ? "#01BDB2" : "transparent",
                    borderColor: hovered ? "#01BDB2" : "#fff",
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
                        fill={"#fff"}
                    />
                    {hovered && <circle cx="33" cy="33" r="31.5" stroke="#01BDB2" stroke-opacity="0.3" stroke-width="3" />}
                </motion.svg>
            </motion.div>
        </motion.div>
    );
}