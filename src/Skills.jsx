import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
export default function Skills() {
    const [ref1, inView1, entry1] = useInView();
    const [ref2, inView2, entry2] = useInView();
    return (
        <div id="skills" className="flex flex-col items-center justify-center mx-auto my-48 p-10 rounded-lg">
            <div className="titleelem">
                <br/>
                <br/>
                <br/>
                <span ref={ref1} className={inView1 ? `opacity-100 transition-all duration-500 text-gray-800` : 'opacity-0 text-gray-800'}>I am a/an</span>
                <div ref={ref2} className={`${inView2 ? `opacity-100 transition-all duration-500` : 'opacity-0'} mt-8 mb-[10rem] text-4xl font-bold xl:text-8xl`}>
                    <TypewriterComponent
                    options={{
                        strings: ["Innovator",  "Debater", "Problem Solver"],
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
    const [ref1, inView1, entry1] = useInView();
    return (
    <div>
        <div ref={ref1} className={inView1 ? `opacity-100 transition-all duration-500 text-gray-800 mb-8` : 'opacity-0 text-gray-800 mb-8'}>
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
    const [ref1, inView1, entry1] = useInView();
    return (
        <div ref={ref1} className={`${inView1 ? "opacity-100 transition-all duration-500" : 'opacity-0 text-gray-800 mb-8'} flex flex-col items-center mx-auto bg-white p-8 rounded-lg shadow-xl`}>
            <div className="text-center text-lg xl:text-xl 2xl:text-4xl font-bold pb-8">
                <span>Machine Learning Projects</span>
            </div>
            <div className="flex mx-auto justify-start items-center">
                <ul className="list-none flex flex-col items-start">
                    <div className="underline decoration-gray-500 text-sm lg:text-lg xl:text-xl">
                        <a href="https://github.com/SunzidHassan/Tensorflow-Product-Demand-Forecasting.git"><li className="py-2">TensorFlow Neural Networks model for product demand forecasting </li></a>
                    </div>
                    <div className="underline decoration-gray-500 text-sm lg:text-lg xl:text-xl" >
                        <a href="https://github.com/SunzidHassan/product-recommender.git"><li className="py-2">Product Recommender System using R ‘recommenderlab‘</li></a>
                    </div>
                    <div className="underline decoration-gray-500 text-sm lg:text-lg xl:text-xl" >
                        <a href="https://1drv.ms/u/s!AqmIzoB8lX7L0EBw4G3eMQlO792k?e=Ee7ZhV"><li className="py-2">“Dynamic programming to design an efficient and cost-effective bus fleetmanagement system”</li></a>
                    </div>
                </ul>
            </div>
        </div>
    );
}

const Awards = () => {
    const [ref1, inView1, entry1] = useInView();
    return (
        <div ref={ref1} className={`${inView1 ? "opacity-100 transition-all duration-500" : 'opacity-0'} flex flex-col items-center mx-auto  bg-white p-8 rounded-lg shadow-xl`}>
            <div className="text-center text-lg xl:text-xl 2xl:text-4xl font-bold pb-8">
                <span>ECA and Awards</span>
            </div>
            <div className="flex mx-auto justify-center items-start">
                <ul className="list-none flex flex-col items-start">
                    <div className="text-sm lg:text-md xl:text-lg  ">
                        <li className="py-2">Champion in ‘WUB National Debate Competition 2019’</li>
                    </div>
                    <div className="text-sm lg:text-md xl:text-lg  ">
                        <li className="py-2">Runner up in the University Grant Commission National British Parliamentary Debate
Competition 2016</li>
                    </div> 
                    <div className="text-sm lg:text-md xl:text-lg">
                        <li className="py-2">Worked as volunteer math teacher at Education for Deprived Students (EDS)</li>
                    </div> 
                </ul>
            </div>
        </div>
    );
}