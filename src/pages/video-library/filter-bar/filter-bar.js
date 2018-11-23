import React from "react";
import { Button } from "reactstrap";
import "./filter-bar.scss";

export const FilterBar = () => {
  return (
    <div className="filter-bar">
      <Button size="sm" className="art mr-2 pl-3 pr-3">
        Art
      </Button>
      <Button size="sm" className="stories mr-2 pl-3 pr-3">
        Stories
      </Button>
      <Button size="sm" className="games mr-2 pl-3 pr-3">
        Games
      </Button>
      <span className="show-watched">Show watched videos</span>
    </div>
  );
};
