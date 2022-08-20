import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./Context/NoteState";

import Navbar from "./MyComponents/Navbar";
import Home from "./Pages/Home";
import Notes from "./Pages/Notes";
import Previousyear from "./Pages/Previousyear";
import Contact from "./Pages/Contact";
import Footer from "./MyComponents/Footer";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <div className="App max-w-7xl flex flex-col h-screen">
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/pyqs" element={<Previousyear />} />
            <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
          </Routes>
          <div className="mt-auto">
            <Footer />
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
