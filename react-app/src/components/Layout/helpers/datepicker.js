import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DateForm = ({ changeDate, startDate }) => {
  const handleOnChange = date => {
    changeDate(date);
  };
  return <DatePicker selected={startDate} onChange={handleOnChange} />;
};

export default DateForm;
