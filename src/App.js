import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";










  const App = () => {
    return (
      <div>
        <Navbar />
        <Product />
      </div>
    );
  };










    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App/>);