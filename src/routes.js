import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ClientsList from "./pages/ClientsList";
import ClientsDetails from "./pages/ClientsDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ClientsList} />
      <Route path="/client/:id" component={ClientsDetails} />
    </BrowserRouter>
  );
}
