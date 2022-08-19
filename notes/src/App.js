import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./Context/NoteState";

import Navbar from "./MyComponents/Navbar";
import Body from "./MyComponents/Body";
import Notes from "./MyComponents/Notes";
import Previousyear from "./MyComponents/Previousyear";
import Contact from "./MyComponents/Contact";

function App() {
  return (
    <div className="App max-w-7xl">
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/pyqs" element={<Previousyear />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
