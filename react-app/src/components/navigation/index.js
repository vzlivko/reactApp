import React from "react";
import "./style.css";
import Button from "@material-ui/core/Button";

const Navigator = ({ navList, setPage }) => {
  const handleOnclick = item => {
    window.history.pushState(null, null, `/${item}/`);
    setPage(`${item}/`);
  };

  return (
    <div className="container">
      {navList.map((item, index) => {
        return (
          <Button
            key={index}
            variant="contained"
            color="primary"
            onClick={() => handleOnclick(item)}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default Navigator;
