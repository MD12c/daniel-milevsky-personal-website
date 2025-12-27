import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { ProjectTabContext } from "../../context/ProjectTabContext";

export default function RobotControls() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Robot Controls</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                This is the coding part of the robot project. As a controller I
                used an app on my phone that transmited a character for each
                button via bluetooth to the HC-05 module. Then the arduino reads
                the signal and executes the correct process. For the arms I
                first tried using inverse kinematics. It worked mathematically
                but the motion was often jittery and unintuitive so I decided to
                switch back to controlling the angles of each arm individually.
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
                I learned the inverse kinematics of a 2-bar linkage, the basics
                of object oriented programing, macros and preprocessor
                definitions, doing math in C++ using math.h library.
            </p>
        </div>
    );
}
