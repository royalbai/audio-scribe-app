import React, { useRef, useState }from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [currentPage, setCurrentPage] = useState("Home");
    const mobileMenuIconRef = useRef(null);
    const mobileMenuDropdownRef = useRef(null);

    const handleMobileMenuIconClick = () => {
        mobileMenuIconRef.current.classList.toggle("active");
        mobileMenuDropdownRef.current.classList.toggle("active");
    }

    const handleLinkClick = (page) => {
        mobileMenuDropdownRef.current.classList.remove("active");
        mobileMenuIconRef.current.classList.remove("active");
        setCurrentPage(page);
    }

    return (
        <div>
            <div className="navHeader">
                <button className="burgerIcon" ref={mobileMenuIconRef} onClick={handleMobileMenuIconClick}>
                    <div className="navBar"></div>
                </button>
                <p>{currentPage}</p>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-regular fa-calendar"></i>
            </div>
            <nav className="mobileNav" ref={mobileMenuDropdownRef}>
                <ul>
                    <li>
                        <i className="fa-solid fa-user"></i>
                        <div>
                        <p>Name</p>
                        <p>Email@joice.ca</p>
                        </div>
                    </li>
                    <li>
                        <i className="fa-solid fa-house-chimney"></i>
                        <Link to="/" onClick={() => handleLinkClick("Home")}>Home</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-feather"></i>
                        <Link to="/journaling" onClick={() => handleLinkClick("Create New Journal")}>Journals</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-gear"></i>
                        <Link to="/settings" onClick={() => handleLinkClick("Settings")}>Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;