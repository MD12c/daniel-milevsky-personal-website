import { useState, useContext } from 'react'
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext"
import { RenderContext } from "../context/RenderContext";

export default function AboutMe() {
    const { darkMode } = useContext(DarkModeContext);
    const { TabMode } = useContext(TabContext);
    const { rendered } = useContext(RenderContext);
    console.log("render "+rendered);

    
    return (
        <div className="absolute z-0 w-full h-full overflow-hidden flex justify-center">
            <div className={`absolute w-full h-full backdrop-blur-sm 
                            ${TabMode === "AboutMe" ? "TabBlurIn" : "TabBlurOut"}`}>
            </div>
            <div className={`z-20 lg:w-[90vw] w-full h-[90vh] mt-3 rounded-2xl pt-[10vh]
                            ${darkMode ? "bg-dr2Green/80" : "bg-dfGray/80"}
                            ${TabMode === "AboutMe" ? "TabIn" : "TabOut"}`}>
                <div className="px-4 pt-3 h-full bg-ltGray/50 rounded-b-xl text-xl atkinson-hyperlegible-regular">
                    {/* <h2 className="text-3xl text-center mb-3">About me</h2> */}
                    <p>

                    </p>
                </div>
            </div>
        </div>
    );
}