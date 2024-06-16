import React from "react";
import { testimonialsData } from '../../../data/testimonials';
import Icons from '../../../components/Icons';

export default function Testimonial() {
    return (
        <section className="w-full flex flex-col items-center my-8">
            <h1 className="font-bold text-2xl lg:text-4xl text-center leading-relax px-12">Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">developers</span> like you</h1>
            <div className="w-full flex flex-wrap justify-center gap-8 mt-16 mb-12">
                {
                    testimonialsData.map((user)=>{
                        return(
                            <TestimonialCard user={user}/>
                        )
                    })
                }
            </div>
        </section>
    )
}


const TestimonialCard = ({user}) => {
    return (
        <div className="w-[300px] bg-neutral-900 px-4 ps-4 py-4 rounded-xl border-neutral-900 border-2 border hover:border-2 duration-500 hover:border-[#00D1FF]">
            <div className="w-full flex justify-between items-center my-2">
                <div className="flex gap-4">
                    <img className="rounded-full" width={50} src={user?.imageUrl!=""?user.imageUrl:"https://avatar.iran.liara.run/public"} alt={user.name} />
                    <div>
                        <p className="font-bold text-md">{user.name}</p>
                        <p className="text-sm">{user.username}</p>
                    </div>
                </div>
                <Icons className={"w-12"} name={user.platform} fill={"#F7C04A"} />
            </div>
            <p className="my-4 text-justify text-sm text-slate-200">{user.feedback}</p>
        </div>
    )
}