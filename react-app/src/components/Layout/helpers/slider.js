import React from "react";
import Slider from "@material-ui/core/Slider";

const TempSlider = ({ changeSlider }) => {
  const handleOnChange = (event, value) => {
    changeSlider(value);
  };
  return (
    <>
      <div>Temperature</div>
      <Slider
        defaultValue={0}
        key='4'
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
