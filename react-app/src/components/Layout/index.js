import React, { useState } from "react";
import Header from "../Header";
import Navigator from "../navigation";
import pageNavigation from "./helpers/pageNavigation";
import "../Layout/style.css";

const Layout = () => {
  const navList = ["Home", "Contacts", "About", "FAQ"];

  let url = window.location.pathname.substring(1);
  if (!url) url = "Home/";
  window.history.pushState(null, null, `/${url}`);

  const [page, setPage] = useState(url);

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
