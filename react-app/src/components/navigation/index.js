import React from "react";
import "../navigation/style.css";

const Navigator = ({ navList, setPage }) => {
  const handleOnclick = item => {
    setPage(item);
  };

  return (
    <div className="container">
      {navList.map((item, index) => {
        return (
          <button key={`${index * 2}`} onClick={() => handleOnclick(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Navigator;
