import React from 'react';

export default function Experience() {
    const honda = {
        job: "Bangladesh Honda Private Ltd.",
        role: "Section Head: Business Planning",
        time: "April 2022 – Ongoing",
        tasks: [`Developed R programs to organize and analyze data from different value chain activities and to
    generate reports for diverse stakeholders (github.com/SunzidHassan/BHL)`,
    `Used inferential statistical tests on time-series data of customer attributes, socio-economic
    indicators, etc., to forecast trends, seasonal variations, and cycles of product sales.`,
    `Used Python’s scipy.optimize library to optimize value chain activities like quantity of raw
    material import, production, distribution, etc. (github.com/SunzidHassan/BHL)`]}
    
    const obboy_labs = {
        job: "Obboy Labs",
        role: "Financial Analyst",
        time: "March 2022 - March 2022",
        tasks: [`Structured equity market data for analysis.`,
        `Used inferential statistical analysis on equity market data to predict stock market performance.`,
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
    return (
        <div id="experience" className="mx-auto my-48 p-10 rounded-lg">
            <div className="text-center font-bold">
                <div className="titleelem">
                <span className="underline">Working Experience</span>
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
    return (
            <div className="flex flex-col list-none items-center p-4 lg:p-8 bg-white my-8 lg:m-8 rounded-xl m-1 shadow-xl">
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