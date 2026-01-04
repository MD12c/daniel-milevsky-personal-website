import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function Plotter() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Plotter</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                In this project we had to make something of our choice using
                arduino microcontrollers. I decided to make a 2D printer that
                draws letters and images. More details about the code is in the
                Image to machine code section. Essentially, is has an X axis
                carriage and a Y axis carriage moved by stepper motors and a pen
                actuated on the Z axis by a servo. This mechanism can take in an
                array of coordinates and plot them on to a piece of paper.
            </p>
            <div className="my-10 mx-5">
                <ImageLoader imgAdress={"plotter.jpg"} key={ProjectTab} />
            </div>
            <div className="mt-5 flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Conclusion</h3>
            </div>
            <p>
                I learned the basics of CNC programing and got better at soldering.
            </p>
        </div>
    );
}
