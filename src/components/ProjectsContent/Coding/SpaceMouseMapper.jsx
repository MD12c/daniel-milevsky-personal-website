import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function SpaceMouseMapper() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">
                Space Mouse Mapper
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
                After the constraint solver project, I wanted to make a more
                practical project that would use the same principles (and also
                with a better UI). The idea was to make a mapper for
                3Dconnexion's SpaceMouse, which is a 3D mouse that can be used
                to control 3D applications. The goal was to make a mapper that
                would allow the user to map the SpaceMouse's buttons and axes to
                keyboard and mouse inputs, so that it could be used in games or
                other 3D applications.
            </p>

            <div className="my-5 flex flex-row items-center">
                <ImageLoader
                    imgAdress={"SpaceMouseMapper/SpaceMouseMapper.jpg"}
                    key={ProjectTab}
                />
            </div>
            <p>
                It works by listening to raw HID reports from the Win32 API and
                translating them into keyboard and mouse events. This allows the
                user to control 3D applications with more intuitive movements. I
                used wxWidgets for the UI and C++ for the backend.
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
                At the end, I was able to make a functional Space Mouse mapper
                that can be used to control 3D applications. Code can be found
                on my github:{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://github.com/MD12c/SpaceMouseMapper"
                >
                    here
                </a>
            </p>
        </div>
    );
}
