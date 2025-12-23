import { useState, useContext } from "react";
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { RenderContext } from "../context/RenderContext";
import ProgressBar from "./progressBar";

export default function AboutMe() {
    const { darkMode } = useContext(DarkModeContext);
    const { TabMode } = useContext(TabContext);
    const { rendered } = useContext(RenderContext);
    console.log("render " + rendered);

    const Software = [
        { name: "Autodesk Inventor", Progress: "100" },
        { name: "Autodesk Fusion", Progress: "50" },
        { name: "Autodesk AutoCad", Progress: "50" },
        { name: "FluidSym", Progress: "75" },
        { name: "Blender", Progress: "50" },
        { name: "ArduinoIDE", Progress: "75" },
        { name: "Office Tools", Progress: "75" },
    ];
    const General = [
        { name: "Manual Machining", Progress: "75" },
        { name: "Electronics", Progress: "75" },
        { name: "3D Printing", Progress: "75" },
        { name: "Math & Kinemtics", Progress: "50" },
    ];
    const Coding = [
        { name: "C++", Progress: "75" },
        { name: "C#", Progress: "50" },
        { name: "Arduino C++", Progress: "75" },
        { name: "React + Tailwind", Progress: "50" },
        { name: "Html + CSS", Progress: "50" },
    ];

    return (
        <div className="fixed z-0 w-full h-full flex overflow-hidden justify-center">
            <div
                className={`w-full h-full backdrop-blur-sm 
                            ${
                                TabMode === "AboutMe"
                                    ? "TabBlurIn"
                                    : "TabBlurOut"
                            }`}
            ></div>
            <div
                className={`absolute lg:w-[90vw] w-[95vw] h-[95vh] mt-3 rounded-2xl pt-[10vh] 
                            ${
                                darkMode
                                    ? "bg-drSecondaryDark/80"
                                    : "bg-dfSecondary/80"
                            }
                            ${TabMode === "AboutMe" ? "TabIn" : "TabOut"}`}
            >
                <div
                    className={`z-40 px-4 pt-3 h-[85vh] rounded-b-2xl text-xl overflow-y-auto scrollbar-thin scrollbar-webkit
                            ${
                                darkMode
                                    ? "bg-dr2SecondaryDark/80 text-lt2PrimaryDark/80"
                                    : "bg-ltSecondary/50 text-black"
                            }`}
                >
                    <div className="w-full h-full">
                        <div className="flex justify-start items-center">
                            <div className="flex flex-col items-baseline ">
                                {/* <h2 className="text-3xl text-center mb-3">About me</h2> */}
                                <p className="max-w-200 2xl:mx-30">
                                    Hi, I'm Daniel Milevsky, a student and a
                                    maker passionate about creating and learning
                                    new things in my free time. I'm currently
                                    doing my 6th semester in mechanical
                                    engineering at Dawson College. <br />
                                    There we are doing:
                                </p>
                                <ul className="flex flex-col list-disc pl-5">
                                    <li>Design with 3d modeling</li>
                                    <li>Material proprieties</li>
                                    <li>Machining projects</li>
                                    <li>Pneumatic & Hydraulic systems</li>
                                    <li>Electronics & Coding</li>
                                    <li>And all kinds of fun projects</li>
                                </ul>
                                <p>
                                    With all this said, I'm always looking
                                    forward to learn more and explore different
                                    topics.
                                </p>
                            </div>
                        </div>
                        <p className="mt-5">My experiences:</p>
                        <div className="flex flex-row flex-wrap mt-5 justify-center gap-15 2xl:justify-between 2xl:mx-25 2xl:flex-nowrap">
                            <div className="inset-0 mb-10">
                                <p>Software</p>
                                {Software.map((Software, i) => (
                                    <ul
                                        className={`
                                                    grid 
                                                    grid-cols-1
                                                    gap-x-4 
                                                    items-center
                                                    2xl:grid-cols-2`}
                                    >
                                        <li
                                            key={i}
                                            className="mt-4 whitespace-nowrap"
                                        >
                                            {Software.name}
                                        </li>
                                        <ProgressBar
                                            barWidth={Software.Progress}
                                        />
                                    </ul>
                                ))}
                            </div>

                            <div className="inset-0 mb-10">
                                <p>General</p>
                                {General.map((General, i) => (
                                    <ul
                                        className={`
                                                grid 
                                                grid-cols-1 
                                                gap-x-4 
                                                items-center 
                                                2xl:grid-cols-2`}
                                    >
                                        <li
                                            key={i}
                                            className="mt-4 whitespace-nowrap"
                                        >
                                            {General.name}
                                        </li>
                                        <ProgressBar
                                            barWidth={General.Progress}
                                        />
                                    </ul>
                                ))}
                            </div>

                            <div className="inset-0 mb-10">
                                <p>Coding</p>
                                {Coding.map((Coding, i) => (
                                    <ul
                                        className={`
                                                    grid 
                                                    grid-cols-1
                                                    gap-x-4
                                                    items-center
                                                    2xl:grid-cols-2`}
                                    >
                                        <li
                                            key={i}
                                            className="mt-4 whitespace-nowrap"
                                        >
                                            {Coding.name}
                                        </li>
                                        <ProgressBar
                                            barWidth={Coding.Progress}
                                        />
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
