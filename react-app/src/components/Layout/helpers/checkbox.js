import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const PrivatePolicy = ({ setChecked }) => {
  const changeState = event => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <FormControlLabel
        control={<Checkbox onChange={changeState} />}
        label="Private policy"
        labelPlacement="bottom"
      />
    </>
  );
};

export default PrivatePolicy;
