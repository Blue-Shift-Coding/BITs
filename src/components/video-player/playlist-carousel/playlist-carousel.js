import React from "react";
import { PlaylistItem } from "./playlist-item/playlist-item";
import Slider from "react-slick";

import { playlist } from "../../../pages/video-library/video-library";
import { Quiz } from "./quiz/quiz";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./playlist-carousel.scss";

const settings = {
  speed: 500,
  slidesToShow: 4,
  infinite: false
};
export const PlaylistCarousel = () => {
  return (
    // <div className="playlist-carousel">
    <Slider {...settings} className="playlist-carousel">
      {playlist.map(({ id }) => (
        <PlaylistItem id={id} />
      ))}
      <Quiz />
    </Slider>
    // </div>
  );
};
