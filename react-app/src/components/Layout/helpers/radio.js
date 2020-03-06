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

const RadioGender = ({ changeRadio, state }) => {
  const handleOnChange = event =>
    changeRadio({ ...state, gender: event.target.value });
  return (
    <div>
      &nbsp;
      <RadioGroup defaultValue={state.gender}>
        <FormControlLabel
          control={<Radio color="primary" onChange={handleOnChange} />}
          value="male"
          label="Male"
        />
        <FormControlLabel
          control={<Radio color="secondary" onChange={handleOnChange} />}
          value="female"
          label="Female"
        />
        <FormControlLabel
          control={<GreenRadio color="default" onChange={handleOnChange} />}
          value="other"
          label="Other"
        />
      </RadioGroup>
    </div>
  );
};

export default RadioGender;
