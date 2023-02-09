import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        // event.preventDefault();
        // axios.post("https://audioscribe.fly.dev/signup", {
        //     user: {
        //         first_name: firstName,
        //         last_name: lastName,
        //         email: email,
        //         password: password,
        //     },
        // }).then((res) => {
        //     navigate("/journaling");
        //     console.log(res);
        // }).catch((err) => {
        //     setError(err.response.data.error);
        // });
        navigate("/journaling");
    };

    return (
        <div className="signUp wrapper">
            <h2>Join Audio Scribe</h2>
            <form className="infoEntry" onSubmit={handleSignUp}>
                <div>
                    <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" />
                </div>
                <div>
                    <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" />
                </div>
                <div>
                    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} type="email" />
                </div>
                <div>
                    <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
                </div>
                <button type="submit">Create account</button>
            </form>
            <p>Already have an account? <Link to="/signin">Sign in</Link></p>
            <p>By signing-up with Joice you agree to the <span>Terms of Service and Privacy Policy.</span></p>
        </div>
    );
};

export default SignUp;