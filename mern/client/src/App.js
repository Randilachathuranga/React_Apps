import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreatePost from "./components/Createpost"; // Adjusted component import
import EditPost from "./components/Ediotpost"; // Adjusted component import
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Postdetails from './components/Postdetails'; // Adjusted component import
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<Postdetails />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}
