import React from "react";

function Chess() {
	return (
		<div id="chess" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
			<hr class="border-b my-8 border-gray-800" />
			<h1 className="text-4xl font-bold text-center text-gray-700 pb-4">
				Chess.com stats
			</h1>
			<h2 className="text-4sm text-center text-gray-400 pb-3">Coming soon</h2>
			<img className="justify-center" src={"/chess.com.jpeg"} />
		</div>
	);
}

export default Chess;
