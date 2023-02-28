import React from "react";

import "./layout.css";
import Routes from "../Routes";

import { BrowserRouter, Route } from "react-router-dom";
import Sidebars from "../sidebar/Sidebars";
import TopNav from "../topnav/TopNav";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="layout">
            <Sidebars {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
