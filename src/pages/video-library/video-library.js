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
      title: "How to Make a Rainbow Pen in Scratch 3",
      level: 1,
      watched: true,
      playlist: 0
    },
    {
      id: "Js83Fgzy35E",
      title: "How to Make a Rainbow Pen in Scratch 3 - Part Two",
      level: 1,
      watched: true,
      playlist: 0
    },
    {
      id: "1wTPV0c_Xv4",
      title: "How to Make a Rainbow Pen in Scratch 3",
      level: 1,
      watched: false,
      playlist: 0
    },
    {
      id: "8nsZYh3IBRQ",
      title: "How to Make a Rainbow Pen in Scratch 3 - Part Three",
      level: 1,
      watched: false,
      playlist: 0
    }
  ],

  [
    {
      id: "MFl-dyZu03M",
      title: "Rainbow Pen B Part One",
      level: 1,
      watched: false,
      playlist: 1
    },
    {
      id: "4O5MUF51GJ8",
      title: "Rainbow Pen B Part Two",
      level: 1,
      watched: false,
      playlist: 1
    },
    {
      id: "x8FMjedtBeM",
      title: "Rainbow Pen B Part Three",
      level: 1,
      watched: false,
      playlist: 1
    },
    {
      id: "_PfuJWFtLdA",
      title: "8 August 2018 - Scratch Intro WIP 02",
      level: 1,
      watched: false,
      playlist: 1
    }
  ],
  [
    {
      id: "8nsZYh3IBRQ",
      title: "How to Make a Rainbow Pen in Scratch 3 - Part Three",
      level: 1,
      watched: false,
      playlist: 2
    },
    {
      id: "MFl-dyZu03M",
      title: "Rainbow Pen B Part One",
      level: 1,
      watched: false,
      playlist: 2
    },
    {
      id: "1wTPV0c_Xv4",
      title: "How to Make a Rainbow Pen in Scratch 3",
      level: 1,
      watched: false,
      playlist: 2
    },
    {
      id: "Js83Fgzy35E",
      title: "How to Make a Rainbow Pen in Scratch 3 - Part Two",
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
