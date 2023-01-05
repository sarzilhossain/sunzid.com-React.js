import React from 'react';
import TypewriterComponent from 'typewriter-effect';

function Header() {
    return (
    <div className='mt-8 lg:mt-0 flex flex-col lg:flex-row mb-48 xl:mt-20'>
        <div className="mx-auto flex flex-col my-auto items-center lg:items-start"> 
            <span className="text-sm md:text-4xl 2xl:text-6xl text-gray-700">Hi, I am </span>
            <span className="text-xl md:text-6xl 2xl:text-8xl bold font-serif text-black">Sunzid Hassan</span>
            <span className="text-xs md:text-lg 2xl:text-xl text-gray-700">Senior Executive - Head of the Business Planning Section</span>
            <span className="text-base md:text-xl 2xl:text-2xl text-gray-700">Bangladesh Honda Private Limited</span>
        </div>
        <div className="mt-20 lg:mr-10">
            <img className="rounded-2xl w-[60rem] h-auto xl:w-[70rem] drop-shadow-2xl" src="img/sunzid_01.jpg"/>
        </div>
    </div>
    );
}

export default Header;