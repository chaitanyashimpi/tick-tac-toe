import React from "react";
import "./App.css";
import Square from "./components/Square";
import GameHeader from "./components/GameHeader";
import GameFooter from "./components/GameFooter";
import Quote from "./components/Quote";

const Game = () => {
	return (
		<div className="app flex">
			<div className="mobile flex flex-col">
				<GameHeader />
					<Square />
					<Square />
					<Square />
				<GameFooter />
			</div>
			<Quote/>
		</div>
	);
};

export default Game;
