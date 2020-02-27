import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
