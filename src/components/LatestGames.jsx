import React from "react";
import { topGames } from "../assets/assets";
import GameCard from "./GameCard";

const LatestGames = () => {
  const latestGames = topGames;
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-semibold text-2xl p-2 animate-wave outline-green-600">
        Latest Games
      </h1>
      <div className="grid grid-cols-2 gap-4 ">
        {latestGames.map((game, idx) => (
          <GameCard key={idx} game={game} />
        ))}
      </div>
    </div>
  );
};

export default LatestGames;
