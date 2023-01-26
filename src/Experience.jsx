import React from 'react';
import { useInView } from 'react-intersection-observer';
export default function Experience() {
    const honda = {
        job: "Bangladesh Honda Private Ltd.",
        role: "Section Head: Business Planning",
        time: "April 2022 – Ongoing",
        tasks: [`Value chain activities Data Analysis (github.com/SunzidHassan/BHL)`,
    `Time Series inferential data analysis and aorcasting on Product sales data`,
    `Optimized value chain activities with Python (github.com/SunzidHassan/BHL)`]}
    
    const obboy_labs = {
        job: "Obboy Labs",
        role: "Financial Analyst",
        time: "March 2022 - March 2022",
        tasks: [`Structured equity market data for analysis.`,
        `Stock Market performance prediction`,
        `Managed a portfolio of open-ended mutual funds.`]
    }

    const onneyshon = {
        job: "Onneyshon",
        role: "Assistant Engineer",
        time: "July 2021 - Feb 2022",
        tasks: [`Worked in partnership with INGO Pragya on the formulation of the ‘Participatory Climate
        Action for Vulnerable Brahmaputra-Ganges Basin’ project.`]
    }

    const grec = {
        job: "GREC",
        role: "Faculty Member",
        time: "April 2018 - March 2020",
        tasks: [`Instructed GRE quantitative reasoning to about 160 students`]
    }
    const [ref1, inView1, entry1] = useInView();
    return (
        <div id="experience" className="mx-auto my-48 p-10 rounded-lg">
            <div className="text-center font-bold">
                <div className="titleelem">
                <span ref={ref1}  className={inView1 ? `opacity-100 transition-all duration-500` : 'opacity-0'}>Working Experience</span>
                </div>
                <br/>
                <br/>
                <br/>
                <ExperienceCard {...honda}/>
                <ExperienceCard {...obboy_labs}/>
                <ExperienceCard {...onneyshon}/>
                <ExperienceCard {...grec}/>
            </div>
        </div>
    );
}

const ExperienceCard = (props) => {
    const [ref, inView, entry] = useInView()
    return (
            <div ref={ref} className={`${inView ? `opacity-100 transition-all duration-500` : 'opacity-0'} flex flex-col list-none items-centser p-4 lg:p-8 bg-white my-8 lg:m-8 rounded-xl m-1 shadow-xl`}>
                <div className='justify-center mx-auto mb-4'>
                    <span className="lg:text-2xl block text-gray-800">{props.job}</span>
                    <span className="lg:text-2xl font-bold block font-serif">{props.role}</span>
                </div>
                {arr_to_li(props.tasks)}
            </div>
    );
}

const arr_to_li = (arr) => {
    const out = [];
    arr.forEach((value) => {
        out.push(
            <div className='text-sm lg:text-lg xl:text-xl my-2'>
                <li key={value}>{value}</li>
            </div>
        );
    });
    return out;
}