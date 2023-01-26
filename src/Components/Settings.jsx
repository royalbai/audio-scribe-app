import React, { useState } from "react";

function Settings() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className="settings wrapper">
            <h2>Profile</h2>
            <div className="photoEdit">
                <h5>Display Photo</h5>
                <i className="fa-solid fa-user"></i>
                <button>Edit Photo</button>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} /><i className="fa-solid fa-pen-to-square"></i>
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} /><i className="fa-solid fa-pen-to-square"></i>
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} /><i className="fa-solid fa-pen-to-square"></i>
                <br />
                <div className="submit">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Settings;