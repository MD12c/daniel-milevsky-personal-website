import { useState, useContext } from "react";
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext";

export default function WhatIsToCome() {
    const { darkMode } = useContext(DarkModeContext);
    const { TabMode } = useContext(TabContext);

    return (
        <div
            className={`absolute min-h-screen w-full flex justify-center inset-0 
            ${TabMode === "What's next" ? "TabIn" : "TabOut"}`}
        >
            <div
                className={`lg:w-250 w-[95vw] md:h-[40vh] sm:h-[48vh] h-[53vh] mt-3 rounded-2xl pt-[10vh] 
                            ${
                                darkMode
                                    ? "bg-drSecondaryDark/80"
                                    : "bg-dfSecondary/80"
                            }`}
            >
                <div
                    data-scroll-container
                    className={`px-4 pt-3 md:h-[30vh] sm:h-[38vh] h-[43vh] rounded-b-2xl text-xl overflow-y-auto overflow-x-hidden [-webkit-overflow-scrolling:touch] scroll-smooth scrollbar-thin scrollbar-webkit
                            ${
                                darkMode
                                    ? "bg-dr2SecondaryDark/50 text-lt2PrimaryDark/80"
                                    : "bg-ltSecondary/50 text-black"
                            }`}
                >
                    <div>
                        <h2 className="text-xl font-oxanium-bold mb-2 mt-4">
                            Plans
                        </h2>
                        <p>
                            After Dawson College, I plan to go to a university
                            and get a bachelor's in mechanical engineering to
                            later get a job as a research and development
                            engineer or R&D in short.
                            <br /> As of this website, I will continue to update
                            it and add more stuff about future projects.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-oxanium-bold mb-2 mt-4">
                            To do
                        </h2>
                        <div>
                            <ul className="list-disc ml-5">
                                <li>Do a plastic injection molder for my dawson final project</li>
                                <li>Try PCB design in KiCad using STM chips</li>
                                <li>Make a 2nd version of the Plotter (using better hardware)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
