import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isChecked: false,
    icon: "eye slash icon",
    inputType: "password",
  };

  componentDidMount() {
    if (localStorage.checkbox && localStorage.email !== "") {
      this.setState({
        isChecked: true,
        email: localStorage.email,
        password: localStorage.password,
      });
    }
  }

  togglePassword = () => {
    let { icon, inputType } = this.state;
    this.setState({
      icon: icon === "eye slash icon" ? "eye icon" : "eye slash icon",
      inputType: inputType === "password" ? "text" : "password",
    });
  };

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangeCheckbox = (event) => {
    this.setState({
      isChecked: event.target.checked,
    });
  };

  loginSubmit = () => {
    const { email, password, isChecked } = this.state;
    if (isChecked && email !== "") {
      localStorage.email = email;
      localStorage.password = password;
      localStorage.checkbox = isChecked;
    }
  };

  render() {
    const { email, password, isChecked, inputType, icon } = this.state;
    return (
      <section className="container">
        <div className="loginContainer">
          <h1>Login</h1>
          <form className="ui form">
            <div className="field">
              <input
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={this.onChangeValue}
              />
            </div>
            <div className="field">
              <input
                name="password"
                type={inputType}
                placeholder="Password"
                value={password}
                onChange={this.onChangeValue}
              />
              <div className="passwordIcon">
                <i className={icon} onClick={this.togglePassword}></i>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  value={isChecked}
                  onChange={this.onChangeCheckbox}
                />
                <label>Remember me?</label>
              </div>
            </div>
            <button className="ui animated button" onClick={this.loginSubmit}>
              <div className="visible content">Login</div>
              <div className="hidden content">
                <i aria-hidden="true" className="sign-in icon"></i>
              </div>
            </button>
          </form>
          <Link to="sign-up">
          <p>Not a member? Sign up today.</p>
          </Link>
        </div>
      </section>
    );
  }
}

export default Login;
