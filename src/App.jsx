import React from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Picture from "./components/Picture";
import Strava from "./components/Strava";
import Contact from "./components/Contact";
import Chess from "./components/Chess";
import ChatBot from "./components/ChatBot";

function App() {
	return (
		<div>
			<Sidenav />
			<Main />
			<Work />
			<Picture />
			<Strava />
			<Chess />
			<Contact />
			<ChatBot />
		</div>
	);
}

export default App;
