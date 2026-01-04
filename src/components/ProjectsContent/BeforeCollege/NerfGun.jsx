import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function NerfGun() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Nerf Gun</h2>
            <div className="flex flex-row items-center">
                <div className={`w-5 h-0.5 mr-1 ${darkMode ? "bg-white/20" : "bg-black/50"}`} />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                This was my second 3D printed and Inventor designed project. As
                a kid, I was facinated by the mechansim of nerf guns, so I
                decided to attempt to build one of my own with peacefull intent.
            </p>
            <div className="my-10 mx-5">
                <ImageLoader imgAdress={"nerfgun.jpg"} key={ProjectTab} />
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
                I learned how to use angled planes and more advanced uses of planes in inventor.
            </p>
        </div>
    );
}
