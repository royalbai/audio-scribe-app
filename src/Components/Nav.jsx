import React, { useRef, useState }from "react";
import { Link, Route, Routes } from "react-router-dom";
import CustomCalendar from "./Calendar";
import Home from "./Home";

function Nav() {
    const [currentPage, setCurrentPage] = useState("Home");
    const mobileMenuIconRef = useRef(null);
    const mobileMenuDropdownRef = useRef(null);
    const calendarDropRef = useRef(null);

    const handleMobileMenuIconClick = () => {
        mobileMenuIconRef.current.classList.toggle("active");
        mobileMenuDropdownRef.current.classList.toggle("active");
        
    }

    const handleLinkClick = (page) => {
        mobileMenuDropdownRef.current.classList.remove("active");
        mobileMenuIconRef.current.classList.remove("active");
        setCurrentPage(page);
    }

    const handleCalendarClick = () => {
        calendarDropRef.current.classList.toggle("active");
    }

    return (
        <div>
            <div className="navHeader">
                <button className="burgerIcon" ref={mobileMenuIconRef} onClick={handleMobileMenuIconClick}>
                    <div className="navBar"></div>
                </button>
                <p>{currentPage}</p>
                <i className="fa-solid fa-magnifying-glass"></i>
                <CustomCalendar calendarDrop={calendarDropRef}/>
                <i className="fa-regular fa-calendar" onClick={handleCalendarClick}></i>
            </div>
            <nav className="mobileNav" ref={mobileMenuDropdownRef}>
                <ul>
                    <li>
                        <Link to="/home" onClick={() => handleLinkClick("Home")}><i className="fa-solid fa-house-chimney"></i>Home</Link>
                    </li>
                    <li>
                        <Link to="/savednotes" onClick={() => handleLinkClick("Journals")}><i className="fa-regular fa-file-lines"></i>Journals</Link>
                    </li>
                    <li>
                        <Link to="/settings" onClick={() => handleLinkClick("Settings")}><i className="fa-solid fa-user"></i>Profile</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/home" element={<Home handleLinkClick={handleLinkClick} />} />
            </Routes>
        </div>
    )
}

export default Nav;