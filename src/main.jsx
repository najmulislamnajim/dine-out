import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Navbar />
      <MainContent />
    </div>
  </StrictMode>
);
