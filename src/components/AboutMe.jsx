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
        <div className="absolute w-full h-full overflow-hidden">
            <div className={`absolute w-full h-full backdrop-blur-sm flex justify-center
                            ${TabMode === "#AboutMe" ? 
                            "TabIn" : TabMode === "Home" ? 
                            "TabOut pointer-events-none" : "pointer-events-none translate-[100vh]"}`}>
                <div className={`sm:w-[75vw] w-full h-[90vh] mt-20 rounded-2xl ${darkMode ? "bg-drSlate/80" : "bg-dfGray/80"}`}>

                </div>
            </div>
        </div>
    );
}