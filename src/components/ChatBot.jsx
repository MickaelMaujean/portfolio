import React from "react";
import { FaRobot } from "react-icons/fa6";

function ChatBot() {
	const handleAIbot = () => {};

	return (
		<div id="chatbot" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
			<hr class="border-b my-8 border-gray-800" />
			<div>
				<label className="block text-sm font-medium leading-6 text-gray-900">
					Support
				</label>
				<div className="relative mt-2 rounded-md shadow-sm">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<span className="text-gray-500 sm:text-sm">
							<FaRobot size={10} />
						</span>
					</div>
					<input
						type="text"
						name="support"
						className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="Your AI bot is coming soon, stay tuned !"
					/>
				</div>
				<div className="mt-2">
					<button
						type="submit"
						onClick={handleAIbot}
						className="rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
}

export default ChatBot;
