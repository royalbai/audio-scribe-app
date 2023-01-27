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

    // const handleSaveJournal = () => {
    //     const journalTitle = title !== "" ? title : "Untitled";
    //     setJournals([...journals, {title: journalTitle, text: transcript, date: new Date().toString()}]);
    //     setSaved("Your entry was saved ✔")
    //     resetTranscript();
    // }

    const toggleMic = () => {
        if(isListening){
        SpeechRecognition.stopListening();
        const journalTitle = title !== "" ? title : "Untitled";
        setJournals([...journals, {title: journalTitle, text: transcript, date: new Date().toString()}]);
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
            <div onClick={toggleMic}>
                {listening ? <img src={OnImage} alt="" /> : <img src={OffImage} alt="" /> }
            </div>
            {/* <button onClick={handleSaveJournal}>Save Journal</button> */}
            <p>{saved}</p>
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