import React from "react";
import ReactDOM from "react-dom/client";
import Counters from "./components/counters";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <header className="w-screen bg-red-500 py-4 px-8 flex justify-center items-center">
      <Counters />
    </header>
  </React.StrictMode>
);
