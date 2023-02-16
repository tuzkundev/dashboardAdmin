import React from "react";

import "./layout.css";
import Router from "../Router";

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
                <Router />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
