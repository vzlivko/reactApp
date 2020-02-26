import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "/home/user/reactApp/react-app/node_modules/react-datepicker/dist/react-datepicker.css";
const DatePick = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  console.log("new Date()", new Date());
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  );
};

export default DatePick;
