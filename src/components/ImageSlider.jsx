import React from "react";
import { topGames } from "../assets/assets";
import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  const images = [...topGames.map((game) => game.image)];
  console.log(images);
  return (
    <div className="mb-5 flex-1">
      <SimpleImageSlider
        width={1100}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        loop={true}
      />
    </div>
  );
};

export default ImageSlider;
