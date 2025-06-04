"use client";

import Image from "next/image";
import FooterButton from "./footerButton";
import FooterCard from "./footerCard";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-forrest lg:p-12 xl:p-32 p-6">
            <div className="flex justify-between lg:flex-row flex-col gap-12 items-center md:mb-42 mb-12">
                <FooterButton label="Request a Demo" onClick={() => alert("Contact Us Clicked")} />
                <FooterButton label="Get In Touch" onClick={() => alert("Contact Us Clicked")} />
            </div>
            <h2 className="text-right font-clash font-[500] md:text-[50px] text-[24px] lg:leading-[54px] leading-[28px] text-white lg:pr-0 pr-8">Stay Informed.<br className="md:hidden" /> Stay Ahead.</h2>
            <div className="flex lg:flex-row flex-col gap-12 items-center justify-between mt-12">
                <FooterCard heading="Our Story" content="Surgo Health is building healthcare's universal “Why Engine”—an AI-powered platform that generates novel intelligence about the people behind the patients and uses this to power smarter, more human-centered care." />
                <FooterCard heading="News & Events" content="Stay up to date with Surgo Health's latest breakthroughs, industry collaborations, and thought leadership. Explore company news, event highlights, and expert discussions shaping the future of healthcare." />
            </div>
            <Image
                src={'svg/footerLogo.svg'}
                alt="Surgo Health Logo"
                width={300}
                height={50}
                objectFit="contain"
                className="mt-32"
            />
            <button className="rounded-[300px] border-[1px] border-purple gap-[16px] p-2 px-6 items-center my-12 lg:flex hidden">
                <p className="font-clash text-[18px] text-white">Contact Us</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.9217 20H10.7657L20 10L10.7657 0H7.9217L16.2925 9.06484H0V10.9352H16.2925L7.9217 20Z" fill="#B09DFC" />
                </svg>
            </button>
            <div className="grid lg:grid-cols-5 mb-24">
                <div className="md:col-span-2 lg:block hidden">
                    <Link
                        className="flex"
                        href="linkedin.com/company/surgo-health"
                        target="_blank"
                    >
                        <Image
                            src={'svg/linkedin.svg'}
                            alt="LinkedIn Logo"
                            width={24}
                            height={24}
                            className="w-[24px] h-[24px] lg:w-[35px] lg:h-[35px]"
                        />
                    </Link>
                    <span>
                        <p className="hidden lg:block font-alfabet text-[18px] leading-[28px] text-white font-light mt-12">© 2025 Surgo Health. All Rights Reserved</p>
                        <div className="flex lg:flex-row flex-col lg:items-center gap-4 mt-4 font-light">
                            <p className="font-alfabet text-[18px] leading-[28px] text-white opacity-50">Terms of Use</p>
                            <p className="lg:block hidden font-alfabet text-[18px] leading-[28px] text-white opacity-50">|</p>
                            <p className="font-alfabet text-[18px] leading-[28px] text-white opacity-50">Privacy</p>
                            <p className="lg:block hidden font-alfabet text-[18px] leading-[28px] text-white opacity-50">|</p>
                            <p className="font-alfabet text-[18px] leading-[28px] text-white opacity-50">Cookie Policy</p>
                        </div>
                        <p className="lg:hidden font-alfabet text-[18px] leading-[28px] text-white font-light mt-4">© 2025 Surgo Health. All Rights Reserved</p>
                    </span>
                </div>
                <div className="col-span-1 ">
                    <div className="lg:border-l-[2px] border-[#ffffff25] border-opacity-50 lg:pl-4 pb-8"><Link className="font-alfabet text-[18px] text-white font-[700]" href={'/'}>Surgo Health</Link></div>
                    <div className="lg:border-l-[2px] border-[#ffffff25] border-opacity-50 lg:pl-4"><Link className="font-alfabet text-[18px] text-white font-[400] leading-[40px]" href={'/'}>Technology</Link></div>
                    <div className="lg:border-l-[2px] border-[#ffffff25] border-opacity-50 lg:pl-4"><Link className="font-alfabet text-[18px] text-white font-[400] leading-[40px]" href={'/'}>Solutions</Link></div>
                    <div className="lg:border-l-[2px] border-[#ffffff25] border-opacity-50 lg:pl-4"><Link className="font-alfabet text-[18px] text-white font-[400] leading-[40px]" href={'/'}>Success Stories</Link></div>
                </div>
                <div className="col-span-1 ">
                    <div className="lg:border-l-[2px] border-[#ffffff25] border-opacity-50 lg:pl-4 pb-8"><Link className="font-alfabet text-[18px] text-white font-[700]" href={'/'}>About Us</Link></div>
                    <div className="lg:border-l-[2px] border-[#ffffff25] border-opacity-50 lg:pl-4"><Link className="font-alfabet text-[18px] text-white font-[400] leading-[40px]" href={'/'}>Our Story</Link></div>
                    <div className="lg:border-l-[2px] border-[#ffffff25] border-opacity-50 lg:pl-4"><Link className="font-alfabet text-[18px] text-white font-[400] leading-[40px]" href={'/'}>Leadership</Link></div>
                </div>
                <div className="col-span-1 ">
                    <div className="lg:border-l-[2px] border-[#ffffff25] border-opacity-50 lg:pl-4 pb-8"><Link className="font-alfabet text-[18px] text-white font-[700]" href={'/'}>News & Events</Link></div>
                    <div className="lg:border-l-[2px] border-[#ffffff25] border-opacity-50 lg:pl-4"><Link className="font-alfabet text-[18px] text-white font-[400] leading-[40px]" href={'/'}>In The News</Link></div>
                    <div className="lg:border-l-[2px] border-[#ffffff25] border-opacity-50 lg:pl-4"><Link className="font-alfabet text-[18px] text-white font-[400] leading-[40px]" href={'/'}>Press Releases</Link></div>
                    <div className="lg:border-l-[2px] border-[#ffffff25] border-opacity-50 lg:pl-4"><Link className="font-alfabet text-[18px] text-white font-[400] leading-[40px]" href={'/'}>Events</Link></div>
                </div>
                <div className="md:col-span-2 lg:hidden">
                    <Link
                        className="flex"
                        href="linkedin.com/company/surgo-health"
                        target="_blank"
                    >
                        <Image
                            src={'svg/linkedin.svg'}
                            alt="LinkedIn Logo"
                            width={24}
                            height={24}
                            className="w-[24px] h-[24px] lg:w-[35px] lg:h-[35px]"
                        />
                    </Link>
                    <span>
                        <p className="hidden lg:block font-alfabet text-[18px] leading-[28px] text-white font-light mt-12">© 2025 Surgo Health. All Rights Reserved</p>
                        <div className="flex lg:flex-row flex-col lg:items-center gap-4 mt-4 font-light">
                            <p className="font-alfabet text-[18px] leading-[28px] text-white opacity-50">Terms of Use</p>
                            <p className="lg:block hidden font-alfabet text-[18px] leading-[28px] text-white opacity-50">|</p>
                            <p className="font-alfabet text-[18px] leading-[28px] text-white opacity-50">Privacy</p>
                            <p className="lg:block hidden font-alfabet text-[18px] leading-[28px] text-white opacity-50">|</p>
                            <p className="font-alfabet text-[18px] leading-[28px] text-white opacity-50">Cookie Policy</p>
                        </div>
                        <p className="lg:hidden font-alfabet text-[18px] leading-[28px] text-white font-light mt-4">© 2025 Surgo Health. All Rights Reserved</p>
                    </span>
                </div>
                <button className="rounded-[300px] border-[1px] border-purple flex gap-[16px] p-2 px-6 items-center my-12 lg:hidden">
                    <p className="font-clash text-[18px] text-white">Contact Us</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.9217 20H10.7657L20 10L10.7657 0H7.9217L16.2925 9.06484H0V10.9352H16.2925L7.9217 20Z" fill="#B09DFC" />
                    </svg>
                </button>
            </div>
            <p className="text-[12px] font-[500] font-alfabet text-white opacity-50">Surgo Health is registered in the US as a Public Benefit Corporation Registered with the UK ICO under registration number ZB588042</p>
            <p className="text-[12px] font-[500] font-alfabet text-white opacity-50">Contact our Data Protection Officer at dpo@surgohealth.com</p>
        </footer>
    )
}