import React, { useState } from "react";
import Header from "../Header";
import Navigator from "../navigation";
import pageNavigation from "./helpers/pageNavigation";
import "../Layout/style.css";

const Layout = () => {
  const navList = ["Home", "Contacts", "About", "FAQ"];
  const [page, setPage] = useState("Home");

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
