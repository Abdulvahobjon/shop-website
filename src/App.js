import React from "react";
import Sidebar from "./components/Sidebar";
import About from "./peach/About";
import Contact from "./peach/Contact";
import Home from "./peach/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom"
function App() {
    return (
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        </Routes>

      </BrowserRouter>
    )
  }

export default App;
