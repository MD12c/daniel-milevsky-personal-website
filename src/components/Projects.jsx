import { useState, useContext } from "react";
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { RenderContext } from "../context/RenderContext";

export default function Projects() {
    const { darkMode } = useContext(DarkModeContext);
    const { TabMode } = useContext(TabContext);
    const { rendered } = useContext(RenderContext);
    console.log("render " + rendered);


    return (
        <div className={`w-full h-full flex justify-center ${TabMode === "Projects" ? "TabIn" : "TabOut"}`}>
            <div
                className={`absolute lg:w-[90vw] w-[95vw] h-[95vh] mt-3 rounded-2xl pt-[10vh] 
                            ${
                                darkMode
                                    ? "bg-drSecondaryDark/80"
                                    : "bg-dfSecondary/80"
                            }`}
                            
            >
                <div
                    className={`px-4 pt-3 h-[85vh] rounded-b-2xl text-xl overflow-y-auto [-webkit-overflow-scrolling:touch] scrollbar-thin scrollbar-webkit
                            ${
                                darkMode
                                    ? "bg-dr2SecondaryDark/80 text-lt2PrimaryDark/80"
                                    : "bg-ltSecondary/50 text-black"
                            }`}
                >
                    
                        
                    
                </div>
            </div>
        </div>
    );
}
