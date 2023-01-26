import React from 'react';
import {BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs";
import { useInView } from 'react-intersection-observer';
export default function Contact() {
    const [ref1, inView1, entry1] = useInView();
    return (
        <div ref={ref1} id="contact" className={`${inView1 ? "opacity-100 transition-all duration-500" : 'opacity-0'} flex flex-col items-center justify-center mx-auto mt-48 p-10 rounded-lg`}>
            <div className="titleelem">
                <span className="">Contact</span>
                <br/>
                <br/>
                <br/>
                <div className='flex flex-col items-center'>
                <ContactInfo/>
                <br/>
                <br/>
                <Socials/>
                </div>
            </div>
        </div>
    );
}

const ContactInfo = () => {
    return (
        <div className="flex flex-col items-center p-4 lg:p-8 bg-white my-8 lg:m-8 rounded-xl shadow-xl">
            <div className="lg:w-[50rem]">
                <div className="py-8">
                    <span className="text-sm lg:text-4xl text-gray-700 block">Email Address: </span><a href="mailto:sunzidhassan@gmail.com" className="text-lg lg:text-2xl font-bold underline decoration-gray-500">sunzidhassan@gmail.com</a>
                </div>
                <div className='py-8'>
                    <span className="text-sm lg:text-4xl text-gray-700 block" >Phone Number: </span><a href="tel:+8801521100604" className="text-lg lg:text-2xl font-bold underline decoration-gray-500">+8801521100604</a>
                </div>
            </div>
        </div>
    );
}

const Socials = () => {
    return (
        <div className='flex flex-row mr-auto lg:mx-auto'>
            <div className='icon hover:animate-pulse p-4 ml-auto'>
                <a href="https://www.facebook.com/sunzid.hassan/">{<BsFacebook size="50"/>}</a>
            </div>
            <div className='icon hover:animate-pulse p-4'>
                <a href="https://www.linkedin.com/in/sunzid-hassan/">{<BsLinkedin size="50"/>}</a>
            </div>
            <div className='icon hover:animate-pulse p-4 mr-auto'>
                <a href="https://www.github.com/SunzidHassan/">{<BsGithub size="50"/>}</a>
            </div>
        </div>
    );
}
