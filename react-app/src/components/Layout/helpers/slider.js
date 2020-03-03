import React from "react";
import Slider from "@material-ui/core/Slider";

const TempSlider = ({ changeSlider }) => {
  const handleOnChange = (event, value) => {
    changeSlider(value);
    localStorage.setItem("slider", value);
  };
  return (
    <>
      <div>Temperature</div>
      <Slider
        value={Number(localStorage.getItem("slider"))}
        aria-label="Temperature"
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={-30}
        max={100}
        valueLabelDisplay="auto"
        onChange={handleOnChange}
      />
    </>
  );
};

export default TempSlider;
