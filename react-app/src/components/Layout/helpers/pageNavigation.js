import React from "react";
import Home from "../pages/home";
import Contacts from "../pages/contacts";
import About from "../pages/about";
import Faq from "../pages/faq";

const pageNavigation = page => {
  switch (page) {
    case "Home":
      return <Home />;
    case "Contacts":
      return <Contacts />;
    case "About":
      return <About />;
    case "FAQ":
      return <Faq />;
    default:
      return Home;
  }
};
export default pageNavigation;
