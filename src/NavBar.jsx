import React from 'react';

function VerticalNavBar() {
    return (
        <div className=''>
           <nav>
                <div id="navbar" className="fixed hidden z-0 xl:block h-screen w-[4.7rem] border-r-4 bg-gray-700 border-black top-0 left-0">
                </div>
                <div className="fixed font-mono hidden z-10 xl:flex px-3 flex-col justify-evenly h-screen w-max">
                    <br/>
                    <NavElement text="Personal Info" id="#info"/>
                    <NavElement text="Education" id="#education"/>
                    <NavElement text="Experience" id="#experience"/>
                    <NavElement text="Skills" id="#skills"/>
                    <NavElement text="Contact" id="#contact"/>
                </div>
            </nav>
        </div>
    );

}

const NavElement = (props) => {
    return (
            <a href={props.id} className="navelem">
                {props.text}
            </a>
    );
}


export default VerticalNavBar