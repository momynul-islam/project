import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="rounded-lg group">
      <img
        className="w-32 h-32 rounded-lg group-hover:scale-105 transition duration-300"
        src={game.image}
        alt={game.title}
      />
      <p className="text-xs text-white group-hover:text-green-600 transition duration-300">
        {game.title.length > 20 ? game.title.substr(0, 20) + "..." : game.title}
      </p>
    </div>
  );
};

export default GameCard;
