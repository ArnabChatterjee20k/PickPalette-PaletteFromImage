import React from "react";
import RedirectButton from "../../../components/RedirectButton";

export default function SubscriptionBanner(){
    return(
        <section className="w-full flex flex-col lg:flex-row gap-6 lg:gap-24 justify-center items-center px-8 my-24">
            <div className="flex flex-col items-center gap-1">
                <p className="font-bold text-center text-2xl lg:text-3xl">Get latest weekly updates</p>
                <p className="font-bold text-center text-2xl lg:text-3xl">and exciting features</p>
            </div>
            <RedirectButton className="w-full sm:w-36 h-fit text-black bg-[#F7C04A] hover:bg-[#ffae00] focus:ring-4 focus:ring-yellow-500" link={"/subscribe/newsletter"} buttonTitle={"Subscribe"}/>
        </section>
    )
}