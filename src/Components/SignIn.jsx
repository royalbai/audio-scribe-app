import React from "react";
import { Link} from "react-router-dom";

function SignIn({ handleSignIn, email, setEmail, password, setPassword, error }) {
    
    return (
        <div className="signIn wrapper">
            <h2>Sign in to <span>Audio Scribe</span></h2>
            <form className="infoEntry" onSubmit={handleSignIn}>
                <div>
                    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} type="email" />
                </div>
                <div>
                    <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}  type="password" />
                    <p>Forgot your password?</p>
                </div>
                <button type="submit">Sign In</button>
            </form>
            <p>Or <Link to="/signup">Create Account</Link></p>
            <p>{error}</p>
        </div>
    );
};

export default SignIn;