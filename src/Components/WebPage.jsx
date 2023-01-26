import React from "react";
import Image from "../assets/MacBook.png"
import { Link } from "react-router-dom";

function WebPage() {
    return (
        <div className="webPage wrapper">
            <img src={Image} alt="Macbook with app homepage on the screen" />
            <div>
                <h2>Record and save your thoughts and ideas</h2>
                <p>Audio Scribe provides a seamless way to journal with your own voice! Save and share your thoughts with colleagues, friends, and family.</p>
                <Link to="/signin"><button>Get started</button></Link>
                <ul>
                    <h3>Available on:</h3>
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