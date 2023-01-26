import React from "react";
import { Link } from "react-router-dom";

function Home({ handleLinkClick }) {
    return (
        <div className="homepage wrapper">
            <h2>Welcome back friend</h2>
            <Link to="/journaling"><button onClick={() => handleLinkClick("Create New Journal")}><i className="fa-regular fa-pen-to-square"></i>Create New Journal</button></Link>
            <div>
                <h4>Motivational Quote of the Day</h4>
                <p>"Build a man a fire and he’ll be warm for a day. Set a man on fire and he’ll be warm for the rest of his life." - Some guy</p>
            </div>
            <div className="homeRecent">
                <h4>Recent</h4>
                <p>*Saved Notes*</p>
            </div>
        </div>
    )
}

export default Home;