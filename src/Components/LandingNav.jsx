import React, { useRef } from "react";
import { Link } from "react-router-dom";

function LandingNav() {
    const mobileMenuIconRef = useRef(null);
    const mobileMenuDropdownRef = useRef(null);

    const handleMobileMenuIconClick = () => {
        mobileMenuIconRef.current.classList.toggle("active");
        mobileMenuDropdownRef.current.classList.toggle("active");
        
    }

    const handleLinkClick = () => {
        mobileMenuDropdownRef.current.classList.remove("active");
        mobileMenuIconRef.current.classList.remove("active");
    }

    return (
        <div className="landingNav">
            <div>
                <button className="burgerIcon" ref={mobileMenuIconRef} onClick={handleMobileMenuIconClick}>
                    <div className="navBar"></div>
                </button>
            </div>
            <nav className="mobileNav" ref={mobileMenuDropdownRef}>
                <ul>
                    <li>
                        <Link to="/signin" onClick={() => handleLinkClick("Home")}>Sign-in</Link>
                    </li>
                    <li>
                        <Link to="/signup" onClick={() => handleLinkClick("Journals")}>Sign-up</Link>
                    </li>
                    <li className="available">
                        <ul>
                            <h2>Available on:</h2>
                            <li>Chrome Desktop (Best)</li>
                            <li>Safari 14.1</li>
                            <li>Microsoft Edge</li>
                            <li>Android webview</li>
                            <li>Samsung Internet</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default LandingNav;