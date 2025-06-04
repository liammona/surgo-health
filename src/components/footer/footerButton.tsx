"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FooterButtonProps {
    label: string;
    onClick?: () => void;
}

export default function FooterButton({ label, onClick }: FooterButtonProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{
                borderColor: "rgba(1,189,178,0.30)",
                background: "#B09DFC",
                borderRadius: "80px",
                backdropFilter: "blur(8px)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="border-[1px] border-aqua rounded-[80px] backdrop-blur-lg bg-[rgba(176,157,252,0.10)] p-6 flex items-center justify-between gap-12 cursor-pointer w-full "
            style={{
                border: "1px solid",
                borderColor: hovered ? "rgba(1,189,178,0.30)" : "#01BDB2",
                background: hovered ? "#B09DFC" : "rgba(176,157,252,0.10)",
                borderRadius: "80px",
                backdropFilter: "blur(8px)",
            }}
            onClick={onClick}
        >
            <p className="text-white font-clash md:text-[34px] text-[18px] font-[500] whitespace-nowrap">{label}</p>
            <motion.div
                animate={{
                    backgroundColor: hovered ? "#fff" : "#B09DFC",
                }}
                className="items-center justify-center p-[16px] rounded-[100%]"
                style={{
                    background: hovered ? "#fff" : "#B09DFC",
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
                        fill={hovered ? "#B09DFC" : "#fff"}
                    />
                </motion.svg>
            </motion.div>
        </motion.button>
    );
}