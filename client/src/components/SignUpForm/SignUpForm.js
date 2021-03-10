import React from "react";
import "./SignUpForm.css";

const SignUp = () => {
  return (
    <section className="container">
      <div className="loginContainer">
        <h1>Create an account</h1>
        <p>It's free and only takes a minute</p>
        <form className="ui form">
        <div className="field">
            <input placeholder="Username" />
          </div>
          <div className="field">
            <input placeholder="Email Address" />
          </div>
          <div className="field">
            <input placeholder="Password" />
          </div>
          <div className="field">
            <input placeholder="Confirm Password" />
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