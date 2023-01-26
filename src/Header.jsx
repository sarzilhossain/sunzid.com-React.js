import React from 'react';

function Header() {
    const prev = "flex flex-col lg:flex-row"
    return (
    <div className='mt-8 lg:mt-0 grid grid-cols-2 mb-48 xl:mt-20'>
        <div className="mx-auto flex flex-col my-auto items-center lg:items-start"> 
            {/* <span className="text-sm md:text-4xl 2xl:text-6xl text-gray-700">Hi, I am </span> */}
            <span className="text-xl md:text-4xl 2xl:text-6xl bold font-serif text-black">Sunzid Hassan</span>
            <span className="text-xs md:text-md 2xl:text-xl text-gray-700">Senior Executive - Head of the Business Planning Section</span>
            <span className="text-base md:text-xl 2xl:text-2xl text-gray-700">Bangladesh Honda Private Limited</span>
        </div>
        <div className="mt-20 lg:mr-10">
            <img className="rounded-2xl w-full h-auto drop-shadow-2xl" src="img/sunzid_01.jpg"/>
        </div>
    </div>
    );
}

export default Header;