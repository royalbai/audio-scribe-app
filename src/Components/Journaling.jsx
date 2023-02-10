import React from "react";
import { EditText } from 'react-edit-text';
import OnImage from "../assets/Mic-Enabled.png";
import OffImage from "../assets/Mic-Disabled.png";

function Journaling({ transcript, listening, title, setTitle, saved, showPopup, toggleMic, saveJournal, hidePopup }) {

    return (
        <div className="journaling wrapper">
            <div className="buttonContainer">
                <button onClick={saveJournal} style={{backgroundColor: !transcript ? "white" : "#006151", color: transcript ? "white" : "lightgray", border: !transcript ? "1px solid lightgray" : "1px solid white"}}>
                    <i className="fa-solid fa-download"></i>Save
                </button>
            </div>
            <input type="text" placeholder="Untitled*" onChange={(e) => setTitle(e.target.value)} value={title} />
            <h4>{ !title ? "Add title before transcribing..." : listening ? "Transcribing..." : !transcript ? "Press the mic to start!" : transcript ? "Paused... Click to edit" : "" }</h4>
            <EditText className="transcript" inputClassName="transcript" defaultValue={transcript}/>
            {showPopup && (
                <div className="popup">
                    <p>{saved}</p>
                    <button onClick={hidePopup}>Cancel</button>
                </div>
            )}
            <div onClick={toggleMic}>
                {listening ? <img src={OnImage} alt="" /> : <img src={OffImage} alt="" /> }
            </div>
        </div>
    );
};

export default Journaling;