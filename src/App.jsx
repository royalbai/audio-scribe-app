import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Home from './Components/Home';
import Nav from './Components/Nav';
import Journaling from "./Components/Journaling";
import SavedNotes from "./Components/SavedNotes";
import Settings from "./Components/Settings";
import Footer from './Components/Footer';
import CustomCalendar from './Components/Calendar';

function App() {

  return (
    <div>
      <div className="App">
        <header>
          <h1>AudioScribe</h1>
          <Nav />
          <CustomCalendar />
        </header>
        <Routes>
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/journaling" element={<Journaling />} />
          <Route path="/savednotes" element={<SavedNotes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
    
  );
}

export default App;
