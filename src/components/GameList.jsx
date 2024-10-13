import React from "react";
import { allGames } from "../assets/assets";
import GameCard from "./GameCard";

const GameList = () => {
  const games = allGames;
  return (
    <div className="my-10 grid grid-cols-8 gap-5">
      {games.map((game, idx) => (
        <GameCard key={idx} game={game} />
      ))}
    </div>
  );
};

export default GameList;
