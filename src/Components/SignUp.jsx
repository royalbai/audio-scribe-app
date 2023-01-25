import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // const { createUser } = UserAuth();
    const navigate = useNavigate()

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError("");
    //     try{
    //         await createUser(email, password);
    //         navigate("/account")
    //     } catch (e) {
    //         setError(e.message);
    //         // console.log(e.message);
    //     }
    // };

    return (
        <div className="signUp wrapper">
            <h2>Join Audio Scribe</h2>
            <form className="infoEntry" /* onSubmit={handleSubmit} */>
                <div>
                    <input placeholder="Name" onChange={(e) => setEmail(e.target.value)} type="text" />
                </div>
                <div>
                    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email" />
                </div>
                <div>
                    <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <button>Create account</button>
            </form>
            <p>Already have an account? <Link to="/signin">Sign in</Link></p>
            <p>By signing-up with Joice you agree to the <span>Terms of Service and Privacy Policy.</span></p>
        </div>
    );
};

export default SignUp;