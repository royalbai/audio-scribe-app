import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import WebPage from './Components/WebPage';
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Home from './Components/Home';
import Nav from './Components/Nav';
import Journaling from "./Components/Journaling";
import SavedNotes from "./Components/SavedNotes";
import Settings from "./Components/Settings";
import Footer from './Components/Footer';
import CustomCalendar from './Components/Calendar';
import LandingNav from './Components/LandingNav';
import Logo from "./assets/Logo.png"


function App() {
  const location = useLocation();

  return (
    <div>
      <div className="App">
        <header>
          <img src={Logo} alt="Audio Scribe logo" />
          {!['/journaling','/savednotes','/settings'].includes(location.pathname) && <LandingNav />}
        </header>
        <div>
          {!['/','/signin','/signup'].includes(location.pathname) && <Nav />}
          {!['/','/signin','/signup'].includes(location.pathname) && <CustomCalendar />}
        </div>
        <Routes>
          <Route path="/" element={<WebPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
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
