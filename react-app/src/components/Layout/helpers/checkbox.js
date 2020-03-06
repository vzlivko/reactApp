import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
const PrivatePolicy = ({ setChecked, state }) => {
  const changeState = event =>
    setChecked({ ...state, checked: event.target.checked });
  return (
    <FormControlLabel
      control={<Checkbox onChange={changeState} checked={state.checked} />}
      label="Private policy"
      labelPlacement="bottom"
    />
  );
};

export default PrivatePolicy;
