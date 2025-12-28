import { useState, useContext } from "react";
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext";

export default function WhatIsToCome() {
    const { darkMode } = useContext(DarkModeContext);
    const { TabMode } = useContext(TabContext);

    const projectTabStyle = `flex font-oxanium text-2xl justify-center items-center rounded-2xl bg-dfSecondary w-auto h-20
    hover:shadow-md hover:cursor-pointer px-2 active:shadow-inner
    ${
        darkMode
            ? "bg-dfSecondaryDark hover:bg-ltPrimaryDark/30 active:bg-ltPrimaryDark/60"
            : "bg-dfSecondary hover:bg-ltPrimary/30 active:bg-ltPrimary/60"
    }`;

    const makeId = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const scrollToItem = (item) => {
        const el = document.getElementById(makeId(item));
        const container = el?.closest("[data-scroll-container]");

        if (!el || !container) return;

        const y = el.offsetTop - 150;

        container.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };
    const scrollToTop = () => {
        const container = document.querySelector("[data-scroll-container]");
        if (!container) return;

        container.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`absolute min-h-screen w-full flex justify-center inset-0 
            ${TabMode === "What's next" ? "TabIn" : "TabOut"}`}
        >
            <div
                className={`lg:w-250 w-[95vw] h-[45vh] mt-3 rounded-2xl pt-[10vh] 
                            ${
                                darkMode
                                    ? "bg-drSecondaryDark/80"
                                    : "bg-dfSecondary/80"
                            }`}
            >
                <div
                    data-scroll-container
                    className={`px-4 pt-3 h-[35vh] rounded-b-2xl text-xl overflow-y-auto overflow-x-hidden [-webkit-overflow-scrolling:touch] scroll-smooth scrollbar-thin scrollbar-webkit
                            ${
                                darkMode
                                    ? "bg-dr2SecondaryDark/80 text-lt2PrimaryDark/80"
                                    : "bg-ltSecondary/50 text-black"
                            }`}
                >
                    <div>
                        <h2 className="text-xl font-oxanium-bold mb-2 mt-4">
                            Plans
                        </h2>
                        <p>
                            After dawson, I plan to go to Concordia University
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
                                <li>Learn OpenGL + do a small project to get familiar with it</li>
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
