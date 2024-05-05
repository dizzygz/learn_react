import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom";

import App from "./App";
import { MySection } from "./App";
import { MyBUtton } from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <MySection>
      <MyBUtton>My button text</MyBUtton>
    </MySection>
  </StrictMode>,
);
