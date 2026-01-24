import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function ImageToMachineCode() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">
                .dxf to Machine Code
            </h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                This is the software part of the plotter project. Here the goal
                was to convert a dxf file taken from
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://cloudconvert.com/"
                >
                    {" "}
                    cloudconvert
                </a>{" "}
                (converted from svg to dxf) into an array for my stepper motors.
                I used C++ fstream library to read the contents of the dxf and
                filter through relevant information and then build the arduino
                (.ino) file that contains the array and is ready for upload.
            </p>
            <div className="flex justify-center w-full mt-5 ml-1.5">
                <img
                    src={`/daniel-milevsky-personal-website/portfolio-img/dxfToMachineCode.jpg`}
                    alt="Cannot load img"
                    className="sm:w-200 w-full rounded-2xl"
                />
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
                I learned how to read, write and create files using fstream in
                C++, how to use std::vector and multi-dimensional vector arrays.
                <br />
                This was my second C++ project and coding project in general. It
                is very far from perfect. I could have declared some varibles as
                static inside the line by line loop <br /> while
                (std::getline(file, lineStr)) <br /> instead of putting them on
                top, I also could have made the filtering logic cleaner using a
                switch(). The point is that this was more of a personal learning
                experiance than a open source tool for public use.
            </p>
        </div>
    );
}
