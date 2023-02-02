import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import OnImage from "../assets/Mic-Enabled.png";
import OffImage from "../assets/Mic-Disabled.png";

function Journaling() {

    const { transcript, listening, resetTranscript, isMicrophoneAvailable } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const [journals, setJournals] = useState([]);
    const [title, setTitle] = useState("");
    const [saved, setSaved] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return <span>Browser does not support speech recognition</span>;
    }

    if (!isMicrophoneAvailable) {
        return <span>Browser does not support microphone</span>
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

    const saveJournal = () => {
        if (transcript) {
            setJournals([...journals, {title: title, text: transcript, date: new Date().toString()}]);
            setSaved(`File name "${title}" was saved and can be viewed in the 'My Journals' tab!`)
            resetTranscript();
            setShowPopup(true);
        }
    }

    const hidePopup = () => {
        setShowPopup(false);
    }

    return (
        <div className="journaling wrapper">
            <div className="buttonContainer">
                <button onClick={saveJournal} style={{backgroundColor: !transcript ? "white" : "#006151", color: transcript ? "white" : "lightgray", border: !transcript ? "1px solid lightgray" : "1px solid white"}}>
                    <i className="fa-solid fa-download"></i>Save
                </button>
            </div>
            <input type="text" placeholder="Untitled*" onChange={(e) => setTitle(e.target.value)} value={title} />
            <h4>{ !title ? "Add title before transcribing..." : listening ? "Transcribing..." : !transcript ? "Press the mic to start!" : transcript ? "Paused..." : "" }</h4>
            <p className="transcript">{transcript}</p>
            {showPopup && (
                <div className="popup">
                    <p>{saved}</p>
                    <button onClick={hidePopup}>Cancel</button>
                </div>
            )}
            <div onClick={toggleMic}>
                {listening ? <img src={OnImage} alt="" /> : <img src={OffImage} alt="" /> }
            </div>
            <ul>
                {journals.map((journal, index) => (
                <li key={index}>
                    <h5>{journal.title}</h5>
                    <p>{journal.text}</p>
                    <p>🚀 {journal.date}</p>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Journaling;