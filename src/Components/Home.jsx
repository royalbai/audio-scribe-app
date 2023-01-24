import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="homepage wrapper">
            <Link to="/journaling"><button><i className="fa-regular fa-pen-to-square"></i>Create New Journal</button></Link>
            <div>
                <h4>Motivational Quote of the Day</h4>
                <p>"When life gives you melons, you might be dyslexic."</p>
                <p>"Build a man a fire and he’ll be warm for a day. Set a man on fire and he’ll be warm for the rest of his life."</p>
            </div>
            <div>
                <h4>Todo List Items</h4>
                <ul>
                    <li>Buy groceries</li>
                    <li>Take doggo on a walko</li>
                    <li>Go to the Jim</li>
                </ul>
            </div>
            <div>
                <h4>Recent Submissions</h4>
                <p>*Saved Notes*</p>
            </div>
        </div>
    )
}

export default Home;