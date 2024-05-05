import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
