import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DateForm = ({ changeDate, state }) => {
  const handleOnChange = date => {
    changeDate({...state, startDate: date});
    localStorage.setItem("date", date);
  };
  return <DatePicker selected={state.startDate} onChange={handleOnChange} />;
};

export default DateForm;
