import React from "react";
import PictureItems from "./PictureItems";
import montblanc from "/montblanc.jpg";
import entreves from "/entreves.jpg";
import gr20 from "/gr20.jpg";
import lapland from "/lapland.jpg";

const Picture = () => {
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
					<PictureItems
						img={montblanc}
						title="Montblanc climbing"
						link={
							"https://www.chamonix-guides.com/fr/activites/categorie/alpinisme/mont-blanc"
						}
					/>
					<PictureItems
						img={entreves}
						title="Aiguille d'Entrêves climbing"
						link={
							"https://www.chamonix-guides.com/fr/activites/details/mixte-aiguilles-dentreves"
						}
					/>
					<PictureItems
						img={gr20}
						title="GR20 path hiking"
						link={"https://www.le-gr20.fr/"}
					/>
					<PictureItems
						img={lapland}
						title="Ice waterfall Lapland"
						link={
							"https://www.getyourguide.co.uk/rovaniemi-l2653/laponie-visite-des-chutes-d-eau-gelees-de-korouoma-t180728/?visitor-id=2MVKOGRWG5UT9U4XJGL1VUXDWALLGMRB&locale_autoredirect_optout=true"
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Picture;
