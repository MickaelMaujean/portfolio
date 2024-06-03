import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";

function Chess() {
	const [stats, setStats] = useState({});

	useEffect(() => {
		axios
			.get("https://api.chess.com/pub/player/Micka57255/stats")
			.then((response) => {
				setStats(response.data);
			})
			.catch((error) => {
				console.error("Error fetching Strava stats:", error);
			});
	});

	return (
		<div id="chess" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
			<hr class="border-b my-8 border-gray-800" />
			<h1 className="text-4xl font-bold text-center text-gray-700 pb-4">
				Chess.com stats
			</h1>
			<h2 className="text-4sm text-center text-gray-400 pb-3">Coming soon</h2>
			<img className="bg-gray-500 flex" src={"/chess2.jpg"} />
			<table class="bg-gray-300 w-full border-4 rounded-xl pt-2 hover:border-collapse m-auto">
				<caption className="bg-gray-400 text-white font-bold pb-1 pt-2 m-auto caption-bottom">
					Personal statistics from chess.com
				</caption>
				<thead className="pl-2 pr-2">
					<tr>
						<th>{""}</th>
						<th className="border border-slate-600">Rating </th>
						<th className="border border-slate-600">Win</th>
						<th className="border border-slate-600">Loss</th>
						<th className="border border-slate-600">Draw</th>
						<th className="border border-slate-600">Best Game</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="flex border border-slate-800">
							Rapid <FaClock size={10} />
						</td>
						<td className="border border-slate-800">{}</td>
						<td className="border border-slate-800">{}</td>
						<td className="border border-slate-800">{}</td>
						<td className="border border-slate-800">{}</td>
						<td className="border border-slate-800">{}</td>
					</tr>
					<tr>
						<td className="flex border border-slate-800">
							Blitz <FaBoltLightning size={10} />
						</td>
						<td className="border border-slate-800">{}</td>
						<td className="border border-slate-800">{}</td>
						<td className="border border-slate-800">{}</td>
						<td className="border border-slate-800">{}</td>
						<td className="border border-slate-800">{}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Chess;
