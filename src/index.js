import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import "tachyons";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);

