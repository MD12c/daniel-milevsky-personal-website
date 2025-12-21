import { useState, useContext, useEffect } from 'react'
import { TabContext } from "../context/TabContext";
import { DarkModeContext } from '../context/DarkModeContext'

export default function Navigation() {
	const { TabMode, setTabMode } = useContext(TabContext);
	const { darkMode } = useContext(DarkModeContext);
	console.log("tabmode "+TabMode);
	const [hover, setHover] = useState(null);

	const NavContent = [
		{ name: ["About me"], link: "#AboutMe" },
		{ name: ["Projects"], link: "#Projects" },
		{ name: ["What's next"], link: "#WhatIsToCome" },
		{ name: ["Gallery"], link: "#Gallery" }
	];
	const cardStyle =`flex flex-col justify-center items-center mt-5  mx-2 h-20 rounded-2xl  pb-5 shadow-5sm shadow-xl cursor-pointer 
					border-gray-300 overflow-hidden active:shadow-inner backdrop-blur-md `; 
	const textStyle = "text-center font-oxanium text-2xl ";
	
	return (
		<div className={` overflow-hidden pb-10`}>
			<div className={`navigationAppearence mt-0 mx-3 flex flex-col md:flex-row flex-wrap justify-evenly`}>
				{NavContent.map((item, i) => (
					<div key={i} className={cardStyle + `${darkMode ? "hover:bg-ltSlate/90 bg-ltSlate/50" : "hover:bg-[#dadfe8] bg-navTab/70"}`}
						onMouseEnter={() => setHover(i)} 
						onMouseLeave={() => setHover(null)}
						onClick={() => setTabMode(item.link)}>
						<div className={`md:translate-x-25 w-60 h-4 rotate-45 translate-x-45
										${darkMode ? "bg-ltGreen" : "bg-dfOrange"}
										${hover === i ? "ribbonAppearance" : "ribbonDisappearance"}`} />
						<div className={`md:translate-x-25 w-60 h-2 bg-drGray rotate-45 translate-x-40
										${hover === i ? "ribbonAppearance" : "ribbonDisappearance"}
										${darkMode ? "bg-slate-950" : "bg-drGray"}`} />
						<h2 className={textStyle + `${darkMode ? "text-ltGreen" : "text-black"}`}>{item.name}</h2>
					</div>
				))}
			</div>
		</div>
	);
}