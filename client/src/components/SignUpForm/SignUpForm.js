import { useState } from "react";
import "./SignUpForm.css";

const SignUp = () => {

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const onType = (event) => {
    switch (event.target.name) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(event.target.value);
    }
    console.log(event.target.name, event.target.value);
  }

  return (
    <section className="container">
      <div className="loginContainer">
        <h1>Create an account</h1>
        <p>It's free and only takes a minute</p>
        <form className="ui form">
          <div className="field">
            <input placeholder="Username" onChange={(event) => onType(event)} name='username' value={username} />
          </div>
          <div className="field">
            <input placeholder="Email Address" onChange={(event) => onType(event)} name='email' value={email} />
          </div>
          <div className="field">
            <input placeholder="Password" onChange={(event) => onType(event)} name='password' value={password} />
          </div>
          <div className="field">
            <input placeholder="Confirm Password" onChange={(event) => onType(event)} name='confirmPassword' value={confirmPassword} />
          </div>
          <button className="ui animated button">
            <div className="visible content">Sign Up</div>
            <div className="hidden content">
              <i aria-hidden="true" className="signup icon"></i>
            </div>
          </button>
        </form>
        <p>By clicking the Sign Up button, you agree to our Terms and Conditions.</p>
      </div>
    </section>
  );
};

export default SignUp;