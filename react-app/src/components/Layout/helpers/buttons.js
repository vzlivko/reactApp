import React from "react";
import Button from "@material-ui/core/Button";

const Buttons = ({ buttonList, buttonTitle }) => {
  const handleOnClick = item => {
    buttonTitle(item);
  };
  return buttonList.map((item, index) => (
    <span key={`${index + 2}`}>
      <Button
        key={`${index + 2}`}
        variant="contained"
        color={item}
        onClick={() => handleOnClick(item)}
      >
        {item} button
      </Button>{" "}
    </span>
  ));
};
export default Buttons;
