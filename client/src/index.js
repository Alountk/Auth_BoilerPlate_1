import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./context/auth/authContext";
import {initialState, reducer } from './context/auth/authReducer'
import { GlobalStyles } from "./stylesGlobal";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider initialState={initialState} reducer={reducer}>
        <App />
        <GlobalStyles />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();