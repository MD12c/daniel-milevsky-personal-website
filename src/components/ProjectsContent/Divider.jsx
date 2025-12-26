import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";


export default function Divider() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className="w-full flex justify-center my-6">
            <div className={`w-[90vw] h-0.5 ${darkMode ? "bg-white/20" : "bg-black/20"}`} />
        </div>
    );
}
