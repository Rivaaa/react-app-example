import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";
import Inventory from "./Inventory";
import Order from "./Order";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route exact path="/store/:storeId" component={App} />
      <Route exact path="/store/cart" component={Order} />
      <Route exact path="/store/inventory" component={Inventory} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
