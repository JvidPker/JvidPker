import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Componentes/App.jsx";
import "./CSS/index.css";

ReactDOM.createRoot(document.getElementById("root")).render();

const root = ReactDOM.createRoot(document.getElementById("root"));
// PascalCase
// camelCase
// snake_case
// kebab-case

root.render(<App />);
