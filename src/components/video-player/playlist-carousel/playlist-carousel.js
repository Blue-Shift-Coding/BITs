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
export const PlaylistCarousel = ({ currentPlaylist }) => {
  return (
    <Slider {...settings} className="playlist-carousel">
      {playlist[currentPlaylist].map(({ id, title }) => (
        <PlaylistItem id={id} title={title} />
      ))}
      <Quiz />
    </Slider>
  );
};
