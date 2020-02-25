import React, { useState } from "react";
import Header from "../Header";
import Navigator from "../navigation";
import pageNavigation from "./helpers/pageNavigation";
import "../Layout/style.css";

const Layout = () => {
  const navList = ["Home", "Contacts", "About", "FAQ"];
  const [page, setPage] = useState("home");
  
  return (
    <>
      <div className="page">
        <div className="header">
          <Header />
        </div>
        <div className="navigationList">
          <Navigator navList={navList} setPage={setPage} />
        </div>
        <div className="content">{pageNavigation(page)}</div>
      </div>
    </>
  );
};
export default Layout;
