import React, { Component } from "react";
import "./LoginForm.css";

class Login extends Component {

  state = {
    email: "",
    password: "",
    isChecked: false,
  };

  componentDidMount() {
    if (localStorage.checkbox && localStorage.email !== "") {
      this.setState({
        isChecked: true,
        email: localStorage.username,
        password: localStorage.password,
      });
    }
  }

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
      localStorage.username = email;
      localStorage.password = password;
      localStorage.checkbox = isChecked;
    }
    // here call the function login
  };

  render() {
    const { email, password, isChecked } = this.state;
    return (
      <section className="container">
        <div className="loginContainer">
          <h1>Login</h1>
          <form className="ui form">
            <div className="field">
              <input placeholder="Email Address" value={email} onChange={this.onChangeValue} />
            </div>
            <div className="field">
              <input placeholder="Password" value={password} onChange={this.onChangeValue} />
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={this.onChangeCheckbox}
                  class="hidden"
                  readonly=""
                  tabindex="0"
                />
                <label>Remember me?</label>
              </div>
            </div>
            <button className="ui animated button">
              <div className="visible content">Login</div>
              <div className="hidden content">
                <i aria-hidden="true" className="sign-in icon"></i>
              </div>
            </button>
          </form>
          <p>Not a member? Sign up today.</p>
        </div>
      </section>
    );
  }
}

export default Login;
