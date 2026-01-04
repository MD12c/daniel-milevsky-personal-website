import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function Gears() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Gears</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                A machining project where the teacher gave each of us drawings
                and instructions to then machine a pair of spur gears with a
                stand using equipment in the machine shop.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row mt-3">
                <ImageLoader
                    imgAdress={"gears/gears2.jpg"}
                    key={ProjectTab}
                />
                <ImageLoader imgAdress={"gears/gears.jpg"} key={ProjectTab} />
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
                I learned how to calculate the appropriate gear center distance,
                select a cutter and cut gears using the horizontal mill.
            </p>
        </div>
    );
}
