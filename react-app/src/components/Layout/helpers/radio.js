import React from "react";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const GreenRadio = withStyles({
  root: {
    "&$checked": {
      color: green[400]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const RadioGender = () => {
  const changeRadio = event => {
    localStorage.setItem("radio", event.target.value);
  };
  return (
    <div>
      &nbsp;
      <RadioGroup defaultValue={localStorage.getItem("radio")}>
        <FormControlLabel
          control={<Radio color="primary" onChange={changeRadio} />}
          value="male"
          label="Male"
        />
        <FormControlLabel
          control={<Radio color="secondary" onChange={changeRadio} />}
          value="female"
          label="Female"
        />
        <FormControlLabel
          control={<GreenRadio color="default" onChange={changeRadio} />}
          value="other"
          label="Other"
        />
      </RadioGroup>
    </div>
  );
};

export default RadioGender;
