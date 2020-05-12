import React from "react";
import ReactDOM from "react-dom";
import {HelmetProvider} from "react-helmet-async";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./context/auth/authContext";
import {initialState, reducer } from './context/auth/authReducer'
import { GlobalStyles } from "./stylesGlobal";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider initialState={initialState} reducer={reducer}>
        <HelmetProvider>
          <App />
          <GlobalStyles />
        </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();