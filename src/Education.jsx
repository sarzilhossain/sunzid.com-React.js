import React from 'react';
import {useInView} from "react-intersection-observer";

export default function Education() {
    const [ref1, inView1, entry1] = useInView()
    const [ref2, inView2, entry2] = useInView()
    return (
        <div id="education" className="mx-auto my-48 p-10 rounded-lg">
            <div className="titleelem">
                <span ref={ref1} className={inView1 ? `opacity-100 transition-all duration-500` : 'opacity-0'}>Educational Background</span>
                <br/>
                <br/>
                <br/>
                <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-rows-2">
                    <EducationCard title="Master of Business Administration"
                    institute="IBA, University of Dhaka" year="2019" result="CGPA: 3.6/4.00"/>
                    <EducationCard title="Bachelor of Urban and Regional Planning"
                    institute="KUET, Khulna" year="2017" result="CGPA 3.43/4.00"/>
                    <EducationCard title="HSC (Science)" institute="Govt Rajendra College, Faridpur"
                    result = "GPU 5.00/5.00" year="2012"/>
                    <EducationCard title="SSC (Science)" institute="Govt Zilla School, Faridpur"
                    result="GPA 5.00/5.00" year="2010"/>
                    <EducationCard title="GRE" grid_rows="2" result="Score: 130/140" year="2017"/>
                    <EducationCard title="TOEFL" grid_rows="2"  result="Score: 116/120" year="2017"/>
                <br/>
            </div>
            <div className="mt-36 text-center text-3xl font-bold"></div>
                    <span ref={ref2} className={inView2 ? `opacity-100 transition-all duration-500` : 'opacity-0'}>Course Certifications</span>
                    <br/>
                    <br/>
                    <br/>
                    <div className="flex flex-col ">
                        <CertificateCard img="img/certs/cs50_intro_to_cs.png" url="https://courses.edx.org/certificates/6975acbabd5346d9b57bac83a8194665"
                            title="CS50x: CS50's Introduction to Computer Science - Harvard"/>
                        <CertificateCard img="img/certs/fundamentals_of_rl.png" url="https://coursera.org/share/ef40fc5115ff6f5ef4384c3704ee3527" 
                            title="Fundamentals of Reinforcement Learning - University of Alberta"/>
                        <CertificateCard img="img/certs/stanford_machine_learning.png" url="https://coursera.org/share/88743c1cb2380c43c4e28f5ee0b9b20b"
                            title="Machine Learning - Stanford"/>
                    </div>
            </div>
        </div>
    );
}

const EducationCard = ({institute="", title, year, result, grid_rows=3}) => {
    const [ref, inView, entry] = useInView();
    return (
        
            <div ref={ref} className={`${inView ? `opacity-100 transition-all duration-500` : 'opacity-0'} lg:w-[30rem] lg:h-[10rem] 2xl:w-[45rem] py-3 text-black h-auto rounded-xl grid grid-rows-{grid_rows}
            mx-auto mx-2 mb-8 bg-white shadow-xl`}>
                <span className="text-lg xl:text-xl">{institute}</span>
                <span className="text-xl xl:text-2xl">{title}</span>
                <span className="text-base xl:text-xl">Passing Year: {year} | {result}</span>
            </div>
    );
}

const CertificateCard = ({img, url, title}) => {
    const [ref, inView, entry] = useInView();
    return (
        <div ref={ref} className={`${inView ? `opacity-100 transition-all duration-500` : 'opacity-0'} w-fit flex flex-col h-auto mx-auto items-center justify-end soverflow-hidden`}>
                <div>
                    <a href={url}><img className="rounded-xl border-2 border-black shadow-xl my-4 mx-auto transition-all duration-500 hover:w-[61rem] w-[60rem] object-cover" src={img}></img></a>
                </div>
        </div>
    );
}