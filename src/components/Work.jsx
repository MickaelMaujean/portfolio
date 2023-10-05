import React from "react";
import WorkItems from "./WorkItems";

const data = [
	{
		year: 2023,
		title: "Aiguille d'Entreves",
		duration: "1 Day",
		details:
			"Clibing on the Aiguille d'Entreves from chamomix and the White Valley",
	},
	{
		year: 2022,
		title: "GR 20",
		duration: "7 days",
		details:
			"Hiking in Corsica to reach south from north on the famous GR20 path",
	},
	{
		year: 2018,
		title: "Mont-blanc climbing",
		duration: "2 Days",
		details: "Mont-Blanc climbing up from les Houches via Le Gouter shelter",
	},
	{
		year: 2018,
		title: "Aiguille du Tour climbing",
		duration: "2 Days",
		details:
			"Reaching up L'Aiguille du Tour from Chamonix with a stop and a night in Albert 1er shelter",
	},
];
const Work = () => {
	return (
		<div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-4">
			<hr class="border-b my-8 border-gray-800" />
			<h1 className="text-4xl font-bold text-center text-gray-700">
				Achievements
			</h1>
			{data.map((item, idx) => (
				<WorkItems
					key={idx}
					year={item.year}
					title={item.title}
					duration={item.duration}
					details={item.details}
				/>
			))}
		</div>
	);
};

export default Work;
