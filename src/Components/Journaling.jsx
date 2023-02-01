import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import OnImage from "../assets/Mic-Enabled.png";
import OffImage from "../assets/Mic-Disabled.png";

function Journaling() {

    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition, isMicrophoneAvailable } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const [journals, setJournals] = useState([]);
    const [title, setTitle] = useState("");
    const [saved, setSaved] = useState("");

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser does not support speech recognition</span>;
    }

    if (!isMicrophoneAvailable) {
        return <span>Browser does not support microphone</span>
    }

    const toggleMic = () => {
        if (!title) {
            setSaved("*Please input a title!*");
            return;
        }

        if(isListening){
        SpeechRecognition.stopListening();
        setJournals([...journals, {title: title, text: transcript, date: new Date().toString()}]);
        setSaved("Your entry was saved ✔")
        resetTranscript();
        }else{
        SpeechRecognition.startListening({ continuous:true });
        }
        setIsListening(!isListening);
    }

    return (
        <div className="journaling wrapper">
            <input type="text" placeholder="Type in your title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <h4>Transcribing...</h4>
            <p className="transcript">{transcript}</p>
            <h5>{saved}</h5>
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