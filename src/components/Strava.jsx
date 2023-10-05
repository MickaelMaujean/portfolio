import React, { useEffect, useState } from "react";
import axios from "axios";

const Strava = () => {
	const [accessToken, setAccessToken] = useState(""); // Initialize with an empty string
	const [stats, setStats] = useState({});
	const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
	const clientSecret = import.meta.env.VITE_REACT_APP_CLIENT_SECRET;
	const refreshToken = import.meta.env.VITE_REACT_APP_REFRESH_TOKEN;

	// Function to refresh the access token using the refresh token
	const refreshAccessToken = () => {
		axios
			.post("https://www.strava.com/api/v3/oauth/token", null, {
				params: {
					client_id: clientId,
					client_secret: clientSecret,
					grant_type: "refresh_token",
					refresh_token: refreshToken,
				},
			})
			.then((response) => {
				const newAccessToken = response.data.access_token;
				setAccessToken(newAccessToken);
			})
			.catch((error) => {
				console.error("Error refreshing access token:", error);
			});
	};

	useEffect(() => {
		// Check if the access token is empty (not initialized or expired)
		if (!accessToken) {
			// If it's empty, refresh the access token
			refreshAccessToken();
		} else {
			// If the access token is available, make the API request
			axios
				.get("https://www.strava.com/api/v3/athletes/80146516/stats", {
					headers: {
						Authorization: `Bearer ${accessToken}`,
						Accept: "application/json",
					},
				})
				.then((response) => {
					setStats(response.data);
				})
				.catch((error) => {
					console.error("Error fetching Strava stats:", error);
				});
		}
	}, [accessToken]);

	return (
		<div id="strava" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
			<hr class="border-b my-8 border-gray-800" />
			<h1 className="text-4xl font-bold text-center text-gray-700 pb-4">
				Strava Stats
			</h1>
			<div className="justify-center items-center flex">
				<img className="bg-gray-500 flex" src={"/power_strava.png"} />
				<table class="bg-gray-300 border-4 rounded-xl pt-2 hover:border-collapse m-auto">
					<caption className="bg-gray-400 text-white font-bold pb-1 pt-2 m-auto caption-bottom">
						Personal running statistics from Strava
					</caption>
					<thead className="pl-2 pr-2">
						<tr>
							<th>{""}</th>
							<th className="border border-slate-600">Ytd Run Totals</th>
							<th className="border border-slate-600">All Run Totals</th>
							<th className="border border-slate-600">Recent Run Totals</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-slate-800">Count</td>
							<td className="border border-slate-800">
								{stats.ytd_run_totals?.count}
							</td>
							<td className="border border-slate-800">
								{stats.all_run_totals?.count}
							</td>
							<td className="border border-slate-800">
								{stats.recent_run_totals?.count}
							</td>
						</tr>
						<tr>
							<td className="border border-slate-800">Distance</td>
							<td className="border border-slate-800">
								{stats.ytd_run_totals?.distance}
							</td>
							<td className="border border-slate-800">
								{stats.all_run_totals?.distance}
							</td>
							<td className="border border-slate-800">
								{stats.recent_run_totals?.distance}
							</td>
						</tr>
						<tr>
							<td className="border border-slate-800">Moving Time</td>
							<td className="border border-slate-800">
								{stats.ytd_run_totals?.moving_time}
							</td>
							<td className="border border-slate-800">
								{stats.all_run_totals?.moving_time}
							</td>
							<td className="border border-slate-800">
								{stats.recent_run_totals?.moving_time}
							</td>
						</tr>
						<tr>
							<td className="border border-slate-800">Elapsed Time</td>
							<td className="border border-slate-800">
								{stats.ytd_run_totals?.elapsed_time}
							</td>
							<td className="border border-slate-800">
								{stats.all_run_totals?.elapsed_time}
							</td>
							<td className="border border-slate-800">
								{stats.recent_run_totals?.elapsed_time}
							</td>
						</tr>
						<tr>
							<td className="border border-slate-800">Elevation Gain</td>
							<td className="border border-slate-800">
								{stats.ytd_run_totals?.elevation_gain}
							</td>
							<td className="border border-slate-800">
								{stats.all_run_totals?.elevation_gain}
							</td>
							<td className="border border-slate-800">
								{stats.recent_run_totals?.elevation_gain}
							</td>
						</tr>
					</tbody>
				</table>
				<img className="justify-center" src={"/connect_strava.png"} />
			</div>
		</div>
	);
};

export default Strava;
