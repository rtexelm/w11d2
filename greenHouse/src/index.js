import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";

function Root() {
  return (
    <ThemeProvider>
      <ClimateContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClimateContext>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
