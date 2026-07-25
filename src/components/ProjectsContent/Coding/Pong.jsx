import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ProjectTabContext } from "../../../context/ProjectTabContext";
import ImageLoader from "../ImageLoader";

export default function Pong() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-oxanium-bold mb-5">Pong Game</h2>
            <div className="flex flex-row items-center">
                <div
                    className={`w-5 h-0.5 mr-1 ${
                        darkMode ? "bg-white/20" : "bg-black/50"
                    }`}
                />
                <h3 className="text-2xl">Intro</h3>
            </div>
            <p>
                This project was a fun way to learn colision detection and
                networking in C++. I used OpenGL for the graphics and winsock2.h
                with ws2tcpip.h for the networking.
            </p>
            <div className="my-5 flex flex-row items-center">
                <ImageLoader imgAdress={"pong/pong.jpg"} key={ProjectTab} />
            </div>
            <p>
                I made the game with a client and server architecture. The
                server is responsible for the game logic and the client is
                responsible for the graphics and user input. The server sends
                the game state to the client and in return, the client sends the
                user input to the server. The game state includes the position
                of the ball and the paddles.
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
                At the end, I was able to make a functional pong game that can
                be played on 2 separate devices on the same local network or on
                a single device. Code can be found on my github:{" "}
                <a
                    className={`underline underline-offset-1 ${
                        darkMode ? "text-ltPrimaryDark" : "text-dfPrimary"
                    }`}
                    href="https://github.com/MD12c/pong/tree/main"
                >
                    here
                </a>
            </p>
        </div>
    );
}
