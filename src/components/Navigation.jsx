import { useState, useEffect } from 'react'
export default function Navigation() {
	
	const NavContent = [
		{ name: ["About me"], link: "#AboutMe" },
		{ name: ["Projects"], link: "#Projects" },
		{ name: ["What's next"], link: "#WhatIsToCome" },
		{ name: ["Gallery"], link: "#Gallery" }
	];
	const cardStyle =`flex flex-col justify-center items-center mt-5  mx-2 h-20 rounded-2xl bg-[#bac0ca] pb-5 shadow-5sm sm:shadow-xl cursor-pointer 
					border-gray-300 overflow-hidden hover:bg-[#c5cad3] active:shadow-inner`; 
	const textStyle = "text-center font-oxanium text-2xl";

	const [hover, setHover] = useState(null);
	return (

		<div className="overflow-hidden pb-10">
			<div className="navigationAppearence mt-4 mx-3 flex flex-col md:flex-row md:flex-wrap md:justify-evenly">
				{NavContent.map((item, i) => (
					<a key={i} href={item.link}>
						<div className={cardStyle} 
							onMouseEnter={() => setHover(i)} 
							onMouseLeave={() => setHover(null)}>
							<div className={`lg:translate-x-25 md:translate-y-0 w-60 h-4 bg-dfOrange rotate-45 translate-x-45
								${hover === i ? "ribbonAppearance" : "ribbonDisappearance"}`} />
							<div className={`lg:translate-x-25 md:translate-y-0 w-60 h-2 bg-drGray rotate-45 translate-x-40
								${hover === i ? "ribbonAppearance" : "ribbonDisappearance"}`} />
							<h2 className={textStyle}>{item.name}</h2>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
