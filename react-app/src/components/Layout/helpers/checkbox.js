import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
const PrivatePolicy = ({ setChecked }) => {
  const changeState = event => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <FormControlLabel
        key='8'
        control={<Checkbox onChange={changeState} />}
        label="Private policy"
        labelPlacement="bottom"
      />
    </>
  );
};

export default PrivatePolicy;
