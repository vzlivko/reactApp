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

  const [state, setState] = useState({
    answer: localStorage.getItem("answer") || "default",
    checked: JSON.parse(localStorage.getItem("checkbox")) || false,
    sliderValue: Number(localStorage.getItem("slider")) || 0,
    startDate: new Date(localStorage.getItem("date")) || new Date()
  });

  const currentDate = new Date().getDate();

  const privatePolicy = state => {
    if (!state) return "dont";
  };
  return (
    <>
      <div className="content">
        <p>Home page</p>
        <Buttons buttonList={buttonList} buttonTitle={setState} state={state} />
        <PrivatePolicy setChecked={setState} state={state} />
        <RadioGender />
        <TempSlider changeSlider={setState} state={state} />
        <DateForm changeDate={setState} state={state} />
      </div>
      <div className="answer">
        <p>{state.answer} button was pressed</p>
        <p>You {privatePolicy(state.checked)} accept private policy</p>
        <p>I am hot on {state.sliderValue}*C</p>
        <p>
          User was {String(currentDate - state.startDate.getDate())} days ago
        </p>
      </div>
    </>
  );
};

export default Home;
