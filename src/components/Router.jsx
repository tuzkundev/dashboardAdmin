import React from "react";
import { Route, Routes, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
    </Switch>
  );
};

export default Router;
