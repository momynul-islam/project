import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import GameList from "./components/GameList";
import LatestGames from "./components/LatestGames";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="my-8 mx-10">
        <div className="flex gap-10">
          <ImageSlider />
          <LatestGames />
        </div>
        <GameList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
