import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { ProjectTabContext } from "../../context/ProjectTabContext";

export default function NerfGun() {
    const { darkMode } = useContext(DarkModeContext);
    const { ProjectTab } = useContext(ProjectTabContext);

    return (
        <div>
            <h2>Nerf Gun</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus accusantium magnam blanditiis expedita sequi ducimus nobis harum
                 incidunt dolores saepe itaque doloribus mollitia a repellat doloremque, quasi explicabo consectetur iure!</p>
        </div>
    );
}
