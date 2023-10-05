import React from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Picture from "./components/Picture";
import Strava from "./components/Strava";
import Contact from "./components/Contact";

function App() {
	return (
		<div>
			<Sidenav />
			<Main />
			<Work />
			<Picture />
			<Strava />
			<Contact />
		</div>
	);
}

export default App;
