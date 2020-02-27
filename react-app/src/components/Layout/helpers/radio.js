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
  return (
    <div>
      &nbsp;
      <RadioGroup>
        <FormControlLabel
          control={<Radio color="primary" />}
          key="1"
          value="male"
          label="Male"
        />
        <FormControlLabel
          control={<Radio color="secondary" />}
          key="3"
          value="female"
          label="Female"
        />
        <FormControlLabel
          control={<GreenRadio color="default" />}
          key="5"
          value="other"
          label="Other"
        />
      </RadioGroup>
    </div>
  );
};

export default RadioGender;