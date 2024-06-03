import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
	FaFacebookSquare,
	FaLinkedin,
	FaGithub,
	FaStrava,
	FaMountain,
	FaRunning,
	FaChess,
} from "react-icons/fa";

const Main = () => {
	return (
		<div id="main">
			<img
				className="w-full h-screen object-cover"
				src="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
				alt=""
			/>
			<div className="w-full h-screen absolute top-0 left-0 bg-white/40">
				<div className="m-auto h-full w-full flex flex-col justify-center items-center">
					<h1 className="flex justify-between gap-4 sm:text-5xl text-4xl font-bold text-gray-800">
						<FaMountain size={40} />
						I'm Mickael Maujean
						<FaRunning size={40} />
					</h1>
					<h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 bg-none">
						<TypeAnimation
							sequence={[
								"I am a Digital Product Manager",
								2000,
								"a Web developer passionate",
								2000,
								"But more importantly:",
								2000,
								"A Mountains, trail running & chess lover !",
								3000,
							]}
							wrapper="h2"
							speed={60}
							cursor={true}
							style={{
								fontSize: "1em",
								display: "inline-block",
								paddingLeft: "5px",
							}}
							repeat={Infinity}
						/>
					</h2>
					<div className="flex justify-between pt-6 max-w-[200px] w-full">
						<a href="https://www.facebook.com/mickael.maujean">
							<FaFacebookSquare className="cursor-pointer" size={20} />
						</a>
						<a href="https://www.linkedin.com/in/mickael-maujean-992932bb">
							<FaLinkedin className="cursor-pointer" size={20} />
						</a>
						<a href="https://github.com/MickaelMaujean">
							<FaGithub className="cursor-pointer" size={20} />
						</a>
						<a href="https://www.strava.com/athletes/80146516">
							<FaStrava className="cursor-pointer" size={20} />
						</a>
						<a href="https://www.chess.com/member/micka57255">
							<FaChess className="cursor-pointer" size={20} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
