import React from 'react';
import Image from 'next/image';

export default function LandingPage() {
    return (
        <div>
            <div className="grid grid-cols-2 h-[1000px] ">
                <div className="flex relative">
                    <Image
                        src="/images/contact-us.webp"
                        objectPosition='top'
                        alt="Contact Us Background"
                        className="w-full h-full object-cover"
                        fill
                        objectFit="cover"
                    />
                </div>
                <div className="p-12 pt-[160px]">
                    <h2 className="text-[78px] leading-[82px] font-clash text-forrest font-[500]">
                        Get in <span className="text-aqua">Touch</span>
                    </h2>
                    <div className="flex gap-2 pl-4 mt-16 mb-4">
                        <p className="text-alfabet text-purple text-18px font-[700]">e.</p>
                        <a href="mailto:info@surgohealth.com" className="text-alfabet text-forrest text-18px font-[400]">info@surgohealth.com</a>
                    </div>
                    <div className="flex gap-2 pl-4">
                        <p className="text-alfabet text-purple text-18px font-[700]">a.</p>
                        <a href="mailto:info@surgohealth.com" className="text-alfabet text-forrest text-18px font-[400]">1701 Rhode Island Ave NW, <br />Washington, DC 20036</a>
                    </div>
                    <div className="bg-lightgrey lg:p-12 lg:px-18 p-8 py-12 lg:rounded-tl-[80px] rounded-tl-[40px] lg:rounded-br-[80px] rounded-br-[40px] w-full mt-12">
                        <form>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name & Surname"
                                className="text-[18px] leading-[28px] font-alfabet text-darkgreen border-b-[1px] border-darkgreen/20 opacity-[75%] pb-[12px] w-full"
                            />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Email Address"
                                className="text-[18px] leading-[28px] font-alfabet text-darkgreen border-b-[1px] border-darkgreen/20 opacity-[75%] pb-[12px] w-full mt-8"
                            />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enquiry"
                                className="text-[18px] leading-[28px] font-alfabet text-darkgreen border-b-[1px] border-darkgreen/20 opacity-[75%] pb-[12px] w-full mt-8"
                            />
                            <button className="rounded-[300px] border-[1px] border-purple flex gap-[16px] p-2 px-6 items-center my-12 ml-auto cursor-pointer">
                                <p className="font-clash text-[18px] text-purple">Submit</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.9217 20H10.7657L20 10L10.7657 0H7.9217L16.2925 9.06484H0V10.9352H16.2925L7.9217 20Z" fill="#B09DFC" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 h-[1000px] ">
                <div className="p-12">
                    <h2 className="text-[78px] leading-[82px] text-right font-clash text-forrest font-[500]">
                        Request a <br /><span className="text-aqua"> Demo</span>
                    </h2>
                    <p className="text-alfabet text-forrest text-[18px] font-[500] text-right mt-12 w-[440px] ml-auto">Fill in the form and we will contact you to set up a demo for one or more solutions that you might be interested in.</p>
                    <div className="bg-lightgrey lg:p-12 lg:px-18 p-8 py-12 lg:rounded-tl-[80px] rounded-tl-[40px] lg:rounded-br-[80px] rounded-br-[40px] w-full mt-12">
                        <form>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name & Surname"
                                className="text-[18px] leading-[28px] font-alfabet text-darkgreen border-b-[1px] border-darkgreen/20 opacity-[75%] pb-[12px] w-full"
                            />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Email Address"
                                className="text-[18px] leading-[28px] font-alfabet text-darkgreen border-b-[1px] border-darkgreen/20 opacity-[75%] pb-[12px] w-full mt-8"
                            />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enquiry"
                                className="text-[18px] leading-[28px] font-alfabet text-darkgreen border-b-[1px] border-darkgreen/20 opacity-[75%] pb-[12px] w-full mt-8"
                            />
                            <button className="rounded-[300px] border-[1px] border-purple flex gap-[16px] p-2 px-6 items-center my-12 ml-auto cursor-pointer">
                                <p className="font-clash text-[18px] text-purple">Submit</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.9217 20H10.7657L20 10L10.7657 0H7.9217L16.2925 9.06484H0V10.9352H16.2925L7.9217 20Z" fill="#B09DFC" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex relative">
                    <Image
                        src="/images/join-us.webp"
                        objectPosition='top'
                        alt="Contact Us Background"
                        className="w-full h-full object-cover"
                        fill
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
}