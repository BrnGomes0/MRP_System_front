import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./sso/msalInstance.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </MsalProvider>
  </React.StrictMode>
);