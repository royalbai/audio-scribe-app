import React from "react";
import { Link } from "react-router-dom";

function SignUp({ handleSignUp, firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, error }) {
    

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
            <p>{error}</p>
        </div>
    );
};

export default SignUp;