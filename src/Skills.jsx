import React from 'react';
import TypewriterComponent from 'typewriter-effect';

export default function Skills() {
    return (
        <div id="skills" className="flex flex-col items-center justify-center mx-auto my-48 p-10 rounded-lg">
            <div className="titleelem">
                <br/>
                <br/>
                <br/>
                <span className=" text-gray-800">I am a/an</span>
                <div className="mt-8 mb-[10rem] text-4xl font-bold xl:text-8xl">
                    <TypewriterComponent
                    options={{
                        strings: ["Programmer", "Engineer", "Data Analyst", "Debater"],
                        autoStart: true,
                        loop: true}}/>
                </div>
                <div class="flex flex-col items-center">
                    <TechStack/>
                    <br/>
                    <br/>
                    </div>
                    <br/>
                    <br/>
                    <ML_Projects/>
                    <br/>
                    <br/>
                    <Awards/>
                </div>
        </div>
    );
}


const TechStack = () => {
    return (
    <div>
        <div className="mb-8">
            <h1 className="">My Tech Stack</h1>
        </div>
        <div class="bg-white mx-auto flex p-4 items-center justify-center rounded-2xl shadow-xl">
            <img className="h-10 w-10 lg:h-20 lg:w-20" src="img/tech_stack/r.svg"/>
            <img className="h-10 w-10 lg:h-20 lg:w-20" src="img/tech_stack/python.svg"/>
            <img className="h-10 w-10 lg:h-20 lg:w-20" src="img/tech_stack/tensorflow.svg"/>
            <img className="h-10 w-10 lg:h-20 lg:w-20" src="img/tech_stack/Power_Bi.svg"/>
            <img className="h-10 w-10 lg:h-20 lg:w-20" src="img/tech_stack/Excel.svg"/>
        </div>
    </div>);
}

const ML_Projects = () => {
    return (
        <div className="flex flex-col items-center mx-auto  bg-white p-8 rounded-lg shadow-xl">
            <div className="text-center text-lg xl:text-xl 2xl:text-4xl font-bold pb-8">
                <span>Machine Learning Projects</span>
            </div>
            <div className="flex mx-auto justify-center items-center">
                <ul className="list-none">
                    <div className="hover:text-gray-600 text-sm lg:text-lg xl:text-xl">
                        <a href="https://github.com/SunzidHassan/Tensorflow-Product-Demand-Forecasting.git"><li className="py-2">TensorFlow Neural Networks model for product demand forecasting </li></a>
                    </div>
                    <div className="hover:text-gray-600  text-sm lg:text-lg xl:text-xl" >
                        <a href="https://github.com/SunzidHassan/product-recommender.git"><li className="py-2">Product Recommender System using R ‘recommenderlab‘</li></a>
                    </div>
                    <div className="hover:text-gray-600  text-sm lg:text-lg xl:text-xl" >
                        <a href="https://1drv.ms/u/s!AqmIzoB8lX7L0EBw4G3eMQlO792k?e=Ee7ZhV"><li className="py-2">Project on “Dynamic programming to design an efficient and cost-effective bus fleetmanagement system”.
                        <i><br/>Awarded at the Engineering Students Association of Bangladesh (ESAB)Smart City Challenge</i></li></a>
                    </div>
                </ul>
            </div>
        </div>
    );
}

const Awards = () => {
    return (
        <div className="flex flex-col items-center mx-auto  bg-white p-8 rounded-lg shadow-xl">
            <div className="text-center text-lg xl:text-xl 2xl:text-4xl font-bold pb-8">
                <span>ECA and Awards</span>
            </div>
            <div className="flex mx-auto justify-center items-center">
                <ul className="list-none">
                    <div className="text-sm lg:text-lg xl:text-xl ">
                        <li className="py-2">Champion in ‘WUB National Debate Competition 2019’</li>
                    </div>
                    <div className="text-sm lg:text-lg xl:text-xl  ">
                        <li className="py-2">Runner up in the University Grant Commission National British Parliamentary Debate
Competition 2016</li>
                    </div> 
                    <div className="text-sm lg:text-lg xl:text-xl ">
                        <li className="py-2">Worked as volunteer math teacher at Education for Deprived Students (EDS)</li>
                    </div> 
                </ul>
            </div>
        </div>
    );
}