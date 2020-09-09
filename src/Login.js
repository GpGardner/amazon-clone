import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = (e) => {
		e.preventDefault();

	}

	const register = (e) => {
		e.preventDefault();

	}

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

			<div className="login__container">
				<h1>Sign In</h1>
				<form action="">
					<h5>Email</h5>
					<input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>	
					<h5>Password</h5>
					<input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>	
					<button onClick={signIn} className="login__signInButton">Sign In</button>
				</form>

			<p>By signing-in you agree to all of my conditions of use & sale. Please note that this is a fake website give me your cookies, and view some interest-based ads </p>
			<button onClick={register}className="login__registerButton">Register</button>
			</div>
    </div>
  );
}

export default Login;
