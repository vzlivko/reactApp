import React from "react";
import Button from "@material-ui/core/Button";

const Buttons = ({ buttonList, buttonTitle }) => {
  const handleOnClick = state => {
    buttonTitle(state);
  };
  return buttonList.map((item, index) => (
    <>
      <Button
        key={`${index * 2}`}
        variant="contained"
        color={item}
        onClick={() => handleOnClick(item)}
      >
        {item} button
      </Button>
      <span> </span>
    </>
  ));
};
export default Buttons;
