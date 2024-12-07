import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 폰트
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Jua&family=Nanum+Pen+Script&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
