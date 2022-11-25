import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App.jsx";

// all components in App.jsx and this will get rendered on root html
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // eslint-disable-next-line comma-dangle
  document.getElementById("root")
);
