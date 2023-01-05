import React from 'react';
import {BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs";

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col items-center justify-center mx-auto mt-48 p-10 rounded-lg">
            <div className="titleelem">
                <span className="underline">Contact</span>
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
                    <span className="text-sm lg:text-4xl text-gray-700 block">Email Address: </span><span className="text-lg lg:text-2xl font-bold">sunzidhassan@gmail.com</span>
                </div>
                <div className='py-8'>
                    <span className="text-sm lg:text-4xl text-gray-700 block" >Phone Number: </span><span className="text-lg lg:text-2xl font-bold">+8801521100604</span>
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