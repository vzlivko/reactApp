import React, { useState, useMemo, useEffect } from "react";
import {
  Buttons,
  RadioGender,
  TempSlider,
  DateForm,
  PrivatePolicy
} from "../helpers";

const Home = () => {
  const buttonList = ["default", "primary", "secondary"];

  let data = JSON.parse(localStorage.getItem("homepage"));
  if (!data)
    data = {
      answer: "default",
      checked: false,
      sliderValue: 0,
      startDate: new Date(),
      gender: "other"
    };
  else data.startDate = new Date(Date.parse(data.startDate));

  const [state, setState] = useState(data);

  useEffect(() => {
    localStorage.setItem("homepage", JSON.stringify(state));
  }, [state]);

  const userVisited = startDate => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const dayWhenUserVisited = startDate.getDate();
    const monthWhenUserVisited = startDate.getMonth();
    if (month <= monthWhenUserVisited)
      if (day <= dayWhenUserVisited) return "User was today";
      else return `User was ${day - dayWhenUserVisited} days ago`;
    else return `User was ${month - monthWhenUserVisited} months ago`;
  };

  const dateOfUserVisiting = useMemo(() => userVisited(state.startDate), [
    state.startDate
  ]);

  const privatePolicy = state => {
    if (!state) return "dont";
  };
  return (
    <>
      <div className="content">
        <p>Home page</p>
        <Buttons buttonList={buttonList} buttonTitle={setState} state={state} />
        <PrivatePolicy setChecked={setState} state={state} />
        <RadioGender changeRadio={setState} state={state} />
        <TempSlider changeSlider={setState} state={state} />
        <DateForm changeDate={setState} state={state} />
      </div>
      <div className="answer">
        <p>{state.answer} button was pressed</p>
        <p>You {privatePolicy(state.checked)} accept private policy</p>
        <p>I am hot on {state.sliderValue}*C</p>
        <p>{dateOfUserVisiting}</p>
      </div>
    </>
  );
};

export default Home;
