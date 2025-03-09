import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider, messages } from "./translations/intlConfig";
import "./config/axiosConfig";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IntlProvider locale="pt" messages={messages["pt"]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

reportWebVitals();
