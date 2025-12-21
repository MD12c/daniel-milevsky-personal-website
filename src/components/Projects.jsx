import { useState, useContext } from 'react'
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from '../context/DarkModeContext'

export default function Projects() {
    const { darkMode } = useContext(DarkModeContext);
    const { TabMode } = useContext(TabContext);
    console.log(TabMode);
    return (
        <div className={`${TabMode === "#AboutMe" ? "visible" : "hidden"}`}>

        </div>
    )
}