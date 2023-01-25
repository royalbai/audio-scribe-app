import React from "react";
import Image from "../assets/MacBook.png"

function WebPage() {
    return (
        <div className="webPage wrapper">
            <img src={Image} alt="Macbook with app homepage on the screen" />
            <h2>Record and save your thoughts and ideas</h2>
            <p>Audio Scribe provides a seamless way to journal with your own voice! Save and share your thoughts with colleagues, friends, and family.</p>
            <button>Get started</button>
        </div>
    )
}

export default WebPage;