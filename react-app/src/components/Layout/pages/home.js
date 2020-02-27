import React, { useState } from "react";
import Buttons from "../helpers/buttons";
import RadioGender from "../helpers/radio";
import TempSlider from "../helpers/slider";
import DatePicker from "react-datepicker";
import PrivatePolicy from "../helpers/checkbox";

const Home = () => {
  const buttonList = ["default", "primary", "secondary"];
  const [answer, viewAnswer] = useState("default");
  const [checked, setChecked] = useState(false);
  const [sliderValue, setValue] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const DatePick = () => {
    return (
      <DatePicker
        selected={startDate}
        onChange={date => {
          setStartDate(date);
        }}
      />
    );
  };
  const privatePolicy = state => {
    if (!state) return "не";
  };
  return (
    <>
      <div className="content">
        <p>Home page</p>
        <Buttons buttonList={buttonList} buttonTitle={viewAnswer} />
        <PrivatePolicy setChecked={setChecked} />
        <RadioGender />
        <TempSlider changeSlider={setValue} />
        <DatePick />
      </div>
      <div className="answer">
        <p>{answer} button was pressed</p>
        <p>Вы {privatePolicy(checked)} приняли пользовательское соглашение</p>
        <p>Установленная температура: {sliderValue}*C</p>
        <p>Пользователь был {} дней назад</p>
      </div>
    </>
  );
};
export default Home;
//<DatePicker selected={date} onChange={setNewDate} />
