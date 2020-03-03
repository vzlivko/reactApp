import React, { useState } from "react";
import {
  Buttons,
  RadioGender,
  TempSlider,
  DateForm,
  PrivatePolicy
} from "../helpers";

const Home = () => {
  const buttonList = ["default", "primary", "secondary"];

  const [answer, viewAnswer] = useState(
    localStorage.getItem("answer") || "default"
  );
  const [checked, setChecked] = useState(
    localStorage.getItem("checkbox") || false
  );
  const [sliderValue, setValue] = useState(localStorage.getItem("slider") || 0);
  const [startDate, setStartDate] = useState(
    new Date(localStorage.getItem("date") || new Date())
  );
  const currentDate = new Date().getDate();

  const privatePolicy = state => {
    if (!state) return "dont";
  };
  return (
    <>
      <div className="content">
        <p>Home page</p>
        <Buttons buttonList={buttonList} buttonTitle={viewAnswer} />
        <PrivatePolicy setChecked={setChecked} checked={checked} />
        <RadioGender />
        <TempSlider changeSlider={setValue} />
        <DateForm changeDate={setStartDate} startDate={startDate} />
      </div>
      <div className="answer">
        <p>{answer} button was pressed</p>
        <p>You {privatePolicy(checked)} accept private policy</p>
        <p>I am hot on {sliderValue}*C</p>
        <p>User was {String(currentDate - startDate.getDate())} days ago</p>
      </div>
    </>
  );
};

export default Home;
