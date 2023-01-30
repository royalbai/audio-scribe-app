import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // const { signIn } = UserAuth();
    const navigate = useNavigate()

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError("");
    //     try{
    //         await signIn(email, password);
    //         navigate("/account")
    //     } catch (e) {
    //         setError(e.message);
    //         // console.log(e.message);
    //     }
    // };

    return (
        <div className="signIn wrapper">
            <h2>Sign in to <span>Audio Scribe</span></h2>
            <form className="infoEntry" /* onSubmit={handleSubmit} */>
                <div>
                    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email" />
                </div>
                <div>
                    <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" />
                    <p>Forgot your password?</p>
                </div>
                <button>Sign In</button>
            </form>
            <p>Or <Link to="/signup">Create Account</Link></p>
        </div>
    );
};

export default SignIn;