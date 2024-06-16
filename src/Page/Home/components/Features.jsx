import React, { useEffect, useRef } from "react";
import Icons from '../../../components/Icons';
import { Link } from 'react-router-dom';
import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'
export default function Features() {

    const featuresData = [
        {
            label: "Generate",
            name: "Color Generator",
            desc: "Generate colors from images instantly using image processing.",
            link: "/generate",
            image: feature1
        },
        {
            label: "Browse",
            name: "Explore Palettes",
            desc: "A palette hub consisting of more than 2500+ proved colors and it is regularly updated",
            link: "/palettes",
            image: feature2
        },
        {
            label: "Preview",
            name: "Preview Mode",
            desc: "Preview mode for testing out the palettes and the algorithm for choosing the correct combination of colors is built from the color theory itself.",
            link: "/preview",
            image: feature3
        }
    ]

    return (
        <section className="w-full mt-24 lg:mt-36">
            <div className="w-full flex flex-col items-center gap-2">
                <p className="font-bold text-2xl lg:text-4xl">Make a professional</p>
                <p className="font-bold text-2xl lg:text-4xl">Color palette<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"> in minutes</span></p>
            </div>
            <div className="relative h-fit lg:min-h-[80vh] relative w-full flex flex-col items-center gap-24 px-4 my-32">
                {
                    featuresData.map((value,index)=>{
                        return(
                            <Feature data={value} key={index}/>
                        )
                    })
                }
            </div>
        </section>
    )
}


const Feature = ({data}) => {
    return (
        <div className="px-4 lg:px-16 h-fit w-full flex gap-8 flex-col lg:flex-row justify-around">
            <div className="flex flex-col h-fit gap-4 w-full lg:w-[45%]">
                <div className="flex gap-2 items-center sticky top-30">
                    <Icons name={data.label} />
                    <span className="font-bold text-[#F7C04A] text-2xl">{data.name}</span>
                </div>
                <p className="text-lg w-full lg:w-[80%]">{data.desc}</p>
                <Link to={data.link} className="w-fit">
                    <div className="flex items-center gap-2 duration-500 hover:gap-4 w-fit">
                        <span className="font-medium text-lg text-[#2A95EB]">Try it out</span>
                        <Icons name={"RightArrow"} />
                    </div>
                </Link>
            </div>
            <div className="h-fit right">
                <img className="w-[700px] p-4 rounded-lg border border-[#2A95EB]" src={data.image} alt={data.name} />
            </div>
        </div>
    )
}