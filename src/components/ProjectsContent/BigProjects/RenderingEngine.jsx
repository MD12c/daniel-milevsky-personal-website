import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";

export default function Engine() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Rendering Engine</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                This is my biggest software project so far.
                <br />
                It encompasses all of my OpenGL/C++ learning journey.
                <br />
                In short, this engine loads 3D models using assimp library and
                puts them on the screen using OpenGL to comunicate with the
                graphics card. To make the models look good, it uses special
                programs called shaders written in its own gl shading language
                that run on the GPU. They perform loads of calculations such as
                model positions, camera view transformations, lighting,
                shadow casting and much more.
                <br />
                <br />
                This engine has:
                <ul className="list-disc list-inside">
                    <li>2D, fly, and orbit cameras</li>
                    <li>3D model loading (.gltf and .obj)</li>
                    <li>Skybox</li>
                    <li>Blinn-Phong shading</li>
                    <li>PBR and IBL shading</li>
                    <li>Point, spot, and directional lights</li>
                    <li>
                        Shadow mapping for directional, point, and spot lights
                    </li>
                    <li>Forward rendering pipeline</li>
                    <li>Multi-Sample Anti-Aliasing (MSAA)</li>
                    <li>Gamma correction and HDR tonemapping</li>
                    <li>Frustum culling</li>
                    <li>ImGui integration</li>
                    <li>Post-processing effects pipeline</li>
                    <li>
                        Diffuse, specular, normal, and displacement mapping
                        (Blinn-Phong)
                    </li>
                    <li>
                        Albedo, AO, roughness, metallic, normal, and
                        displacement mapping (PBR)
                    </li>
                </ul>
            </p>
            <div className="flex justify-center w-full">
                <div className="flex justify-center w-full mt-5 ml-1.5 py-4">
                    <img
                        src={`/daniel-milevsky-personal-website/portfolio-img/Engine/Engine.png`}
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
                Thanks to {" "} 
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://www.youtube.com/watch?v=XpBGwZNyUh0&list=PLPaoO-vpZnumdcb4tZc4x5Q-v7CkrQ6M-&index=2"
                >
                    Victor Gordan
                </a>
                {" "} and {" "} 
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://learnopengl.com/Introduction"
                >
                    Joey de Vries
                </a>
                {" "} for their amazing
                tutorials which helped me learn this stuff.
                I have built this project as a template for other future projects.
                Code can be found on my github:{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://github.com/MD12c/OpenGL-CMake-Template"
                >
                    here
                </a>
            </p>
        </div>
    );
}
