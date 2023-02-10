import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { Routes, Route, useLocation } from "react-router-dom";
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
    const [journals, setJournals] = useState([]);
    const [title, setTitle] = useState("");
    const [saved, setSaved] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return <span className="notSupported">Browser does not support speech recognition</span>;
    }

    if (!isMicrophoneAvailable) {
        return <span className="notSupported">Browser does not support microphone</span>
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
            setJournals([...journals, {title: title, text: transcript, date: new Date().toDateString(), time: new Date().toLocaleTimeString()}]);
            setSaved(`File name "${title}" was saved and can be viewed in the 'My Journals' tab!`)
            resetTranscript();
            setShowPopup(true);
        }
        // axios.post("https://audioscribe.fly.dev/api/v1/voices/1", {
        //     voice: {
        //         file_name: journals.title,
        //         voice_file: journals.text,
        //         date: journals.date
        //     }
        // }).then((res) => {
        //     console.log(res);
        // }).catch((err) => {
        //     setError(err.response.data.error);
        // });
    }

    const hidePopup = () => {
        setShowPopup(false);
    }

    // const displayJournal = () => {
    //   return (
    //     <>
    //       <ul>
    //         {journals.map((journal, index) => (
    //         <li key={index}>
    //             <h5>{journal.title}</h5>
    //             <p>{journal.text}</p>
    //             <p>🚀 {journal.date}</p>
    //         </li>
    //         ))}
    //       </ul>
    //     </>
    //   )
    // }

    // const titleProp = (e) => {
    //   return setTitle(e.target.value);
    // }

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
            />} 
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/journaling/" 
            element={<Journaling 
              journals={journals} 
              setJournals={setJournals}
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
          <Route path="/savednotes" element={<SavedNotes journals={journals} />} />
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
