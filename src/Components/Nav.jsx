import React, { useRef, useState }from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomCalendar from "./Calendar";

function Nav() {
    const [currentPage, setCurrentPage] = useState("Home");
    const mobileMenuIconRef = useRef(null);
    const mobileMenuDropdownRef = useRef(null);
    const calendarDropRef = useRef(null);
    const navigate = useNavigate();

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

    const handleSignOut = () => {
        navigate("/signin");
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
                        <Link to="/journaling" onClick={() => handleLinkClick("Home")}><i className="fa-solid fa-house-chimney"></i>Create New Journal</Link>
                    </li>
                    <li>
                        <Link to="/savednotes" onClick={() => handleLinkClick("Journals")}><i className="fa-regular fa-file-lines"></i>My Journals</Link>
                    </li>
                    <li>
                        <Link to="/settings" onClick={() => handleLinkClick("Settings")}><i className="fa-solid fa-user"></i>Profile Management</Link>
                    </li>
                    <button onClick={handleSignOut}>Sign Out</button>
                </ul>
            </nav>
            {/* <Routes>
                <Route path="/home" element={<Home handleLinkClick={handleLinkClick} />} />
            </Routes> */}
        </div>
    )
}

export default Nav;