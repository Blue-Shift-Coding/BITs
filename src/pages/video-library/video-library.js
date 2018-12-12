import React from "react";
import Tooltip from "rc-tooltip";
import { Container, Row, Button } from "reactstrap";
import { VideoItem } from "./video-item/video-item";
import { FilterBar } from "./filter-bar/filter-bar";
import { concat, flatten } from "ramda";
import "./video-library.scss";

export const playlist = [
  [
    {
      id: "1wTPV0c_Xv4",
      title: "The Rainbow Pen",
      level: 1,
      watched: true,
      playlist: 0
    },
    {
      id: "Js83Fgzy35E",
      title: "The Falling Football Game",
      level: 1,
      watched: true,
      playlist: 0
    },
    {
      id: "1wTPV0c_Xv4",
      title: "The Spongebob Dash Game",
      level: 1,
      watched: false,
      playlist: 0
    },
    {
      id: "8nsZYh3IBRQ",
      title: "Make an ‘About Me’ Collage",
      level: 1,
      watched: false,
      playlist: 0
    }
  ],

  [
    {
      id: "MFl-dyZu03M",
      title: "The Underwater Party",
      level: 1,
      watched: false,
      playlist: 1
    },
    {
      id: "4O5MUF51GJ8",
      title: "Desert Rescue",
      level: 1,
      watched: false,
      playlist: 1
    },
    {
      id: "x8FMjedtBeM",
      title: "Form a Band",
      level: 1,
      watched: false,
      playlist: 1
    },
    {
      id: "_PfuJWFtLdA",
      title: "Angles and Shapes",
      level: 1,
      watched: false,
      playlist: 1
    }
  ],
  [
    {
      id: "8nsZYh3IBRQ",
      title: "Drawing with Sprites",
      level: 1,
      watched: false,
      playlist: 2
    },
    {
      id: "MFl-dyZu03M",
      title: "The Maze Game",
      level: 1,
      watched: false,
      playlist: 2
    },
    {
      id: "1wTPV0c_Xv4",
      title: "Moon Landing",
      level: 1,
      watched: false,
      playlist: 2
    },
    {
      id: "Js83Fgzy35E",
      title: "Dance Party",
      level: 1,
      watched: false,
      playlist: 2
    }
  ]
];
export const VideoLibrary = () => {
  return (
    <div className="video-library">
      <Container>
        <Row className="header justify-content-between ml-1 mt-3 mb-4 d-flex">
          <div className="d-flex align-items-center">
            <h1 className="title mr-4">Video library</h1>
            <FilterBar />
          </div>
          <div className="d-flex align-items-center">
            <Button size="sm" className="challenge-points pl-3 pr-3">
              +13,521 challenge points
            </Button>
          </div>
        </Row>
        <Row>
          {flatten(playlist).map(track => (
            <VideoItem
              currentPlaylist={track.playlist}
              title={track.title}
              id={track.id}
              level={track.level}
              watched={track.watched}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};
