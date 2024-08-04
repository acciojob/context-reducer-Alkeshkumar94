import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Data from "./components/Data"

ReactDOM.render(
    <React.StrictMode>
       <Data>
       <App />
       </Data>
    </React.StrictMode>,
    document.getElementById("root")
);