import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";

export default function ConstraintSolver() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">
                Constraint Solver
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
                This project was a the most difficult one I have done so far
                mathematicly and architecturally. The goal was to make a
                constraint solver similar to ones in CAD programs. Using a set
                of constraints like "point A is on line B" or "line C is
                perpendicular to line D", the solver should be able to find a
                solution for the positions of the points and lines.
            </p>
            <div className="my-5 flex flex-row items-center">
                <div className="flex justify-center w-full">
                    <img
                        src={`/daniel-milevsky-personal-website/portfolio-img/ConstraintSolver/ConstraintSolver.png`}
                        alt="Cannot load img"
                        className="w-full rounded-2xl"
                    />
                </div>
            </div>
            <p>
                The solver works on the priciple of Newton-Raphson method for
                Multidimensional formulations (system of equations), see{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://en.wikipedia.org/wiki/Newton%27s_method#Multidimensional_formulations"
                >
                    wikipedia
                </a>
                . It involves calculating the Jacobian matrix of the system of
                equations and iteratively updating the positions of the points
                and lines until a solution is found or a maximum number of
                iterations is reached. For graphics I used OpenGL plus ImGui for
                UI and for vector math I used Eigen library.
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
                At the end, I was able to make a functional sketch solver that
                can be used to solve simple geometric constraints. Code can be
                found on my github:{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://github.com/MD12c/sketch-solver"
                >
                    here
                </a>
            </p>
        </div>
    );
}
