import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function BlowDartTube() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Blow Dart Tube</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                This was a small project made as a sequel to the nerf gun. Using
                a barrel designed for the same darts and a larger opening for
                the mouth.
            </p>
            <div className="flex flex-row gap-x-3 mx-5 my-10">
                <ImageLoader
                    imgAdress={"blowdart/blowdart.jpg"}
                    key={ProjectTab}
                />
                <ImageLoader
                    imgAdress={"blowdart/blowdart3.jpg"}
                    key={ProjectTab}
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
                I learned the importance of print orientation and tuned my
                printer for better bed adhesion.
            </p>
        </div>
    );
}
