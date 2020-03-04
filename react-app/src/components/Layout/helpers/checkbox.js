import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
const PrivatePolicy = ({ setChecked, checked }) => {
  const changeState = event => {
    setChecked(event.target.checked);
    localStorage.setItem("checkbox", event.target.checked);
  };
  return (
    <FormControlLabel
      control={<Checkbox onChange={changeState} checked={checked} />}
      label="Private policy"
      labelPlacement="bottom"
    />
  );
};

export default PrivatePolicy;
