import React from "react";
import Image from "../assets/Landing-Page-Image.png";
import { Link } from "react-router-dom";

function WebPage() {
    return (
        <div className="webPage wrapper">
            <img src={Image} alt="Macbook with app homepage on the screen" />
            <div>
                <h1>Record and save your thoughts and ideas</h1>
                <p>Audio Scribe provides a seamless way to journal with your own voice! Save and share your thoughts with colleagues, friends, and family.</p>
                <Link to="/signin"><button>Get started</button></Link>
                <ul>
                    <h2>Available on:</h2>
                    <li>Chrome Desktop (Best)</li>
                    <li>Safari 14.1</li>
                    <li>Microsoft Edge</li>
                    <li>Android webview</li>
                    <li>Samsung Internet</li>
                </ul>
            </div>
        </div>
    )
}

export default WebPage;