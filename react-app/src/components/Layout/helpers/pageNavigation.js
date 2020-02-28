import React from "react";
import { Home, Contacts, About, Faq } from "../pages";

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
      return <Home />;
  }
};
export default pageNavigation;
