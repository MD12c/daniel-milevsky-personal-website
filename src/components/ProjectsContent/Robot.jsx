import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { ProjectTabContext } from "../../context/ProjectTabContext";

export default function Robot() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Robot</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                The goal of this project was to build a robot that would fit
                inside a 25cm x 25cm by 40cm high box that could take a floating
                ball inside a basket full of water and put it into a small
                container. For this project, we had a tight deadline of 5 weeks
                that unfortunately intersected with our exam period, giving us ~2
                weeks for everything. For more details on code, go to the robot
                controls section.
            </p>
            <div className="mt-5 flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Conclusion</h3>
            </div>
            <p>
                I learned how to connect bluetooth to arduino via the HC-05 module, 
                the inverse kinematics of a 2-bar linkage and that electronics need more space.
            </p>
        </div>
    );
}
