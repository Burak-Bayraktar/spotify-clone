import React from "react";
import { Route, Routes } from "react-router-dom";
import WebPlayerLayout from "views/Layout/WebPlayer";

const WebPlayerApp = () => {
  return (
    <Routes>
      <Route path="/player" element={<WebPlayerLayout />}>
        <Route index element={<WebPlayerApp />} />
      </Route>
    </Routes>
  );
};

export default WebPlayerApp;
