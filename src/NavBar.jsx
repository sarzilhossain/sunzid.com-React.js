import React from 'react';

function VerticalNavBar() {
    return (
        <div>
           <nav>
                <div id="navbar" className="fixed hidden z-0 xl:block h-screen w-[5.9rem] border-r-4 bg-gray-700 border-black top-0 left-0">
                </div>
                <div className="fixed font-mono hidden z-10 xl:flex pl-3 pr-3  flex-col
                justify-evenly h-screen w-max">
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
            <div className="navelem">
                <a href={props.id}>{props.text}<br/></a>
            </div>
    );
}


export default VerticalNavBar