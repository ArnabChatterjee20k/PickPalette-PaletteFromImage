import React from "react";
import Marquee from 'react-fast-marquee'
import useIsMobile, { useIsPad } from "../../../hooks/useIsMobile";
import '../home.css'

function Bars({ className }) {
    const isMobile = useIsMobile()
    const isPad = useIsPad()

    const barColors = ["#FFE4D0", "#0066C4", "#0085FF", "#FF005C", "#00FFC2", "#52FF00", "#00C2FF","#FFF000"]

    function getRandomSize() {
        return Math.floor(Math.random() * (250 - 150)) + 150;
    }
    if (!isMobile && isMobile || isPad)
        return (
            <div className={`my-12 ${className}`}>
                <Marquee direction="right" speed={80} className="h-auto mt-10 sm:mt-20" gradient={false}>
                    {
                        barColors.map((color) => {
                            return (
                                <div className="rounded-xl mx-2" style={{ width: "250px", height: "60px", backgroundColor: `${color}` }}></div>
                            )
                        })
                    }
                </Marquee>
                <Marquee direction="left" speed={80} className="h-auto mt-4 sm:mt-20" gradient={false}>
                    {
                        barColors.map((color) => {
                            return (
                                <div className="rounded-xl mx-2" style={{ width: "250px", height: "60px", backgroundColor: `${color}` }}></div>
                            )
                        })
                    }
                </Marquee>
            </div>
        )
    else
        return (
            <div className={className}>
                <Marquee speed={60} className={`h-auto mt-10 sm:mt-20 ${className}`} gradient={false}>
                    {
                        barColors.map((color) => {
                            return (
                                <div className="rounded-t-xl mx-4" style={{ width: "200px", height: `${getRandomSize()}px`, backgroundColor: `${color}` }}></div>
                            )
                        })
                    }
                </Marquee>
            </div>
        )
}

export default Bars;