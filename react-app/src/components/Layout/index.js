import React, { useState } from "react";
import Header from "../Header";
import Navigator from "../navigation";
import pageNavigation from "./helpers/pageNavigation";
import "../Layout/style.css";

const Layout = () => {
  const navList = ["Home", "Contacts", "About", "FAQ"];
  let path;
  switch (window.location.pathname) {
    case "/":
      path = "Home";
      break;
    case "/Contacts":
      path = "Contacts";
      break;
    case "/About":
      path = "About";
      break;
    case "/FAQ":
      path = "FAQ";
      break;
    default:
      path = "Home";
  }
  const [page, setPage] = useState(path);

  return (
    <>
      <div className="page">
        <div className="header">
          <Header />
        </div>
        <div className="navigationList">
          <Navigator navList={navList} setPage={setPage} />
        </div>
        {pageNavigation(page)}
      </div>
    </>
  );
};
export default Layout;
