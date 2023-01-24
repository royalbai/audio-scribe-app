import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function Journaling() {

    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const [journals, setJournals] = useState([]);
    const [title, setTitle] = useState("");
    const [saved, setSaved] = useState("");

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser does not support speech recognition</span>;
    }

    const handleSaveJournal = () => {
        const journalTitle = title !== "" ? title : "Untitled";
        setJournals([...journals, {title: journalTitle, text: transcript, date: new Date().toString()}]);
        setSaved("Your entry was saved ✔")
        resetTranscript();
    }

    const toggleMic = () => {
        if(isListening){
        SpeechRecognition.stopListening();
        }else{
        SpeechRecognition.startListening({ continuous:true });
        }
        setIsListening(!isListening);
    }

    return (
        <div className="journaling wrapper">
            <input type="text" placeholder="Type in your title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <p className="transcript">{transcript}</p>
            <h3 onClick={toggleMic}>{listening ? <i className="fa-solid fa-microphone-lines"></i> : <i className="fa-solid fa-microphone-lines-slash"></i>}</h3>
            <button onClick={handleSaveJournal}>Save Journal</button>
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