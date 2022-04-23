import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import WebSiteLayout from "./views/Layout/WebSite";
import { UserProvider } from "./contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <WebSiteLayout>
          <App />
        </WebSiteLayout>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
