import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
const Configroutes = () => {
  return (
    <>
      <Switch>
        <Navbar />

        <Route path="/home" exact component={Home} />
        <Route path="/reports" component={Reports} />
        <Route path="/products" component={Products} />
      </Switch>
    </>
  );
};

export default Configroutes;
