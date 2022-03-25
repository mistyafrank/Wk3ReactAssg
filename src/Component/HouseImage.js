/*
import React, { useState } from "react";
import { HOUSE_IMAGES } from "../shared/data";


export class HouseImage extends React.Component {
  state = {
    HOUSE_IMAGES : []
  };



  componentDidMount() {
    this.fetchHouseImage();
  }

  fetchHouseImage = async () => {
    const HouseImage = React.useRef(
     HouseImage[Math.floor(Math.random() * HOUSE_IMAGES.length)]
    );
    HouseImage.get();
    this.setState({ houseImage });
  };

  render() {
    return (
      <div className="house-image">
        <img src={HOUSE_IMAGES.current} alt="houseImage" />
      </div>
    );
  }
};
*/