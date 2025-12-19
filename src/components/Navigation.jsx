import { useState } from 'react'
export default function Navigation() {
	const NavContent = [
		{ name: ["About me"], link: "#AboutMe" },
		{ name: ["Projects"], link: "#Projects" },
		{ name: ["What is", <br key="br" />, "to come"], link: "#WhatIsToCome" }
	];
	const cardStyle =`flex flex-col justify-center items-center w-40 h-50 rounded-2xl bg-gray-400/40 pb-5 shadow-xl cursor-pointer 
					border-gray-300 overflow-hidden hover:bg-gray-400/25 active:shadow-inner`; 
	const textStyle = "text-center font-oxanium text-2xl";

	const [hover, setHover] = useState(null);
	return (
		<div>
			<div className="mt-10 mx-3 flex justify-between md:justify-evenly">
				{NavContent.map((item, i) => (
					<a key={i} href={item.link}>
						<div className={cardStyle} 
						onMouseEnter={() => setHover(i)} 
						onMouseLeave={() => setHover(null)}>
							
							<div className={`translate-x-20 translate-y-0 w-60 h-4 bg-orange-400 rotate-45
								${hover === i ? "ribbonAppearance" : "ribbonDisappearance"}`} />
							<div className={`translate-x-20 translate-y-0 w-70 h-2 bg-gray-500 rotate-45
								${hover === i ? "ribbonAppearance" : "ribbonDisappearance"}`} />
							<h2 className={textStyle}>{item.name}</h2>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
