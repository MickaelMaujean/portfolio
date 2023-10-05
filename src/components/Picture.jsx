import React from "react";
import PictureItems from "./PictureItems";
import montblanc from "/montblanc.jpg";

const Picture = () => {
	const products = [
		{
			id: 1,
			href: "#",
			name: "Mont-blanc climb up",
			description: "In 2018 I climbed up the Mont-blanc over 2 days",
			imageSrc: "/montblanc.jpg",
			imageAlt: "Mont blanc climbing",
		},
		{
			id: 2,
			href: "#",
			name: "PMP certification",
			description:
				"In 2022 I have taken and passed the PMP certification from PMI",
			imageSrc: "/PMP.jpg",
			imageAlt: "PMP certif",
		},
	];
	return (
		<div className="bg-white">
			<div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
				<hr class="border-b my-8 border-gray-800" />
				<h1 className="text-4xl font-bold text-center text-gray-700 pb-4">
					Pictures
				</h1>
				<h2 className="text-4sm text-center text-gray-400 pb-3">
					Enjoy this choosen pictures from my different albums taken during all
					my adventures ! You can get more info on some specific places if you
					find that spot interesting
				</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
					<PictureItems img={montblanc} title="Montblanc climbing" />
					<PictureItems img={montblanc} title="Montblanc climbing" />
					<PictureItems img={montblanc} title="Montblanc climbing" />
					<PictureItems img={montblanc} title="Montblanc climbing" />
				</div>
			</div>
		</div>
	);
};

export default Picture;
