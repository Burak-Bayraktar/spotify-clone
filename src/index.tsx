import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import WebSiteLayout from "./views/Layout/WebSite";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WebSiteLayout>
        <App />
      </WebSiteLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
