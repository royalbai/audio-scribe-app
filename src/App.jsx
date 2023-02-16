import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
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
  const { transcript, listening, resetTranscript, isMicrophoneAvailable } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [saved, setSaved] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();



  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return <span className="notSupported">Browser does not support speech recognition</span>;
  }

  if (!isMicrophoneAvailable) {
      return <span className="notSupported">Browser does not support microphone</span>
  }

  const handleSignUp = (event) => {
      event.preventDefault();
      axios.post("https://audioscribe.fly.dev/signup", {
          user: {
              first_name: firstName,
              last_name: lastName,
              email: email,
              password: password,
          },
      }).then((res) => {
          navigate("/journaling");
          setData(res.data);
          console.log(res.data);
      }).catch((err) => {
          setError(err.response.data.error);
      });
  }

  const handleSignIn = (event) => {
      event.preventDefault();
      axios.post("https://audioscribe.fly.dev/login", {
          user: {
              email: email,
              password: password,
          },
      }).then((res) => {
          navigate("/journaling");
          setData(res.data);
          console.log(res.data);
      }).catch((err) => {
          setError(err.response.data.error);
      })
  }

  const toggleMic = () => {
      if (!title) {
          setSaved("Please add a title before transcribing!");
          setShowPopup(true);
          return;
      }

      if(isListening){
          SpeechRecognition.stopListening();
      } else {
          SpeechRecognition.startListening({ continuous:true });
      }
      setIsListening(!isListening);
  }

  const saveJournal = (event) => {
    event.preventDefault();
    if (transcript) {
      const newJournal = {title: title, text: transcript, date: new Date().toDateString(), time: new Date().toLocaleTimeString()};
      

      axios.post(`https://audioscribe.fly.dev/api/v1/voices?user_id=${data.user.id}`, {
        voice: {
          file_name: newJournal.title,
          voice_file: newJournal.text,
          date: newJournal.date.time
        }
      }, {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      }).then((res) => {
        console.log(res);
        setSaved(`File name "${title}" was saved and can be viewed in the 'My Journals' tab!`);
        resetTranscript();
        setShowPopup(true);
      }).catch((err) => {
        setError(err.response.data.error);
      });
    }
  }

  const hidePopup = () => {
      setShowPopup(false);
  }

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
          <Route path="/signup" 
            element={<SignUp 
              handleSignUp={handleSignUp}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              error={error}
            />} 
          />
          <Route path="/signin" 
            element={<SignIn 
              handleSignIn={handleSignIn}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              error={error}
              />} 
            />
          <Route path="/home" element={<Home />} />
          <Route path="/journaling/" 
            element={<Journaling 
              transcript={transcript}
              listening={listening}
              title={title}
              setTitle={setTitle}
              saved={saved}
              showPopup={showPopup}
              toggleMic={toggleMic}
              saveJournal={saveJournal}
              hidePopup={hidePopup}
            />} 
          />
          <Route path="/savednotes" element={<SavedNotes data={data} />} />
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
