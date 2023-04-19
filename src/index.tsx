import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyled from "styles/global.style";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
);
