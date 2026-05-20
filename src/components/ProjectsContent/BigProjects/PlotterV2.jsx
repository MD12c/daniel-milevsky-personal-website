import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";

export default function PlotterV2() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Plotter V2</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                For my second plotter project, I built on the knowledge I gained
                from the first plotter project. I was in part inspired by the
                design of{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://www.youtube.com/watch?v=wX90X4rVUr8&list=LL&index=68&t=86s"
                >
                    IV Projects
                </a>{" "}
                and wanted to make a more complex project that involved making
                my own CNC shield, image vectorizer, data serializer and an
                OpenGl interface to control the plotter. Here is how it came
                out:
            </p>
            <div className="flex justify-center w-full mt-5 ml-1.5 py-4">
                <img
                    src={`/daniel-milevsky-personal-website/portfolio-img/plotterV2/plotterV2.png`}
                    alt="Cannot load img"
                    className="sm:w-200 w-full rounded-2xl"
                />
            </div>
            <p>
                The mechanical design principle is the same as IV Projects, but
                I managed to salvage some parts from the old plotter, which made
                the build process much easier. The CNC shield is a custom PCB
                that I designed in KiCAD and had manufactured by JLCPCB. It uses
                socket connectors for attaching an ESP32 and DRV8825 stepper
                motor drivers. The design can be found{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://github.com/MD12c/Plotter-PCB"
                >
                    here
                </a>.
            </p>
            <p>
                Now that I look back I see that I should have placed multiple
                capacitors close to each stepper motor driver instead of a
                single large capacitor, due to ESR. The red wires are the power
                wires. Due to the large currents the PCB traces would need to be
                very wide to handle the current, so I used wires instead. This
                could have been avoided if I made a better layout.
            </p>
            <div className="flex justify-center w-full mt-5 ml-1.5 py-4">
                <img
                    src={`/daniel-milevsky-personal-website/portfolio-img/plotterV2/PCB.png`}
                    alt="Cannot load img"
                    className="sm:w-200 w-full rounded-2xl"
                />
            </div>
            <p>
                To prepare the image for vectorization, I used OpenCV, a python
                library for image processing, and applied a simple thresholding
                technique to convert it to a binary image, stretched it to have
                the same aspect ratio as a letter size paper, and then used
                Canny edge detection to filter the edges.
            </p>
            <p>
                The OpenGL interface is written in C++ and uses the GLFW library
                to create a window and handle user input. I also used ImGui to
                create the control panel and the G-code preview window on the
                left. Essentially, what this app does is calculate the G-code
                from an image, serialize it, send it to the ESP32 using a serial
                connection, and provide an interface for controlling the
                plotter. Also it could export G-code in a .NC file and simulate
                the path inside the viewport. The code is available{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://github.com/MD12c/Plotter"
                >
                    here
                </a>
                . Sadly, due to some compatibility issues, it only runs on my
                laptop :( this could be due to the fact that I switched to CMake
                from visual studio. I find that it gives me more control and
                freedom over the compilation and linking process, since it is
                all typed in a separate file and I do not have to learn the
                visual studio interface.
            </p>
            <div className="flex justify-center w-full mt-5 ml-1.5 py-4">
                <img
                    src={`/daniel-milevsky-personal-website/portfolio-img/plotterV2/preview.png`}
                    alt="Cannot load img"
                    className="sm:w-200 w-full rounded-2xl"
                />
            </div>
            <p>
                Nonetheless, I also tested it with the trusted FluidNC firmware
                and GRBL-Plotter and here is how it came out:
            </p>
            <div className="flex justify-center w-full">
                <div className="flex justify-center w-full mt-5 ml-1.5 py-4">
                    <img
                        src={`/daniel-milevsky-personal-website/portfolio-img/plotterV2/babyIMG.png`}
                        alt="Cannot load img"
                        className="sm:w-200 w-full rounded-2xl"
                    />
                </div>
                <div className="flex justify-center w-full mt-5 ml-1.5 py-4">
                    <img
                        src={`/daniel-milevsky-personal-website/portfolio-img/plotterV2/baby.png`}
                        alt="Cannot load img"
                        className="sm:w-200 w-full rounded-2xl"
                    />
                </div>
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
                This project was a huge learning experience for me, since it
                involved a lot of different disciplines, such as mechanical
                design, PCB design, firmware development, image processing and
                Graphics programming. I am very happy with how it came out and I
                learned a lot from it. If I were to do it again, I would make a
                better PCB laypout or buy a premade CNC shield, make the frame
                out of aluminum extrusions and add limit switches for homing.
            </p>
        </div>
    );
}
