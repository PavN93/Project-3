import React from "react";
import "./LoginForm.css";

const Login = () => {
  return (
    <section className="container">
      <div className="loginContainer">
      <h1>Login</h1>
      <form className="ui form">
        <div className="field">
          <input placeholder="Email Address" />
        </div>
        <div className="field">
          <input placeholder="Password" />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" class="hidden" readonly="" tabindex="0" />
            <label>Remember me?</label>
          </div>
        </div>
        <button type="submit" className="ui button">
          Login
        </button>
      </form>
      <p>Not a member? Sign up today.</p>
      </div>
    </section>
  );
};

export default Login;
