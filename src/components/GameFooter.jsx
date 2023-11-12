import React from "react";

const GameFooter = () => {
	return (
		<div className="flex gameFoot">
			<div className="score flex">
				<span>X (YOU)</span>
				<span>0</span>
			</div>
			<div className="score flex">
				<span>TIES</span>
				<span>0</span>
			</div>
			<div className="score flex">
				<span>O (CPU)</span>
				<span>0</span>
			</div>
		</div>
	);
};

export default GameFooter;
