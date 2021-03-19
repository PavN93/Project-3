import React, { useContext, useState } from "react";
import fetcher from "../../functions/fetcher";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";
import UserAuthContext from "../../context/UserAuth";
import { validateLoginObject } from "../../functions/validateInput";

const Login = () => {

  // input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // password visibility 
  const [passwordIcon, setPasswordIcon] = useState("eye slash icon");
  const [inputType, setInputType] = useState("password");

  // client input validation error
  const [validationError, setValidationError] = useState("");
  // server input validation error
  const [serverError, setServerError] = useState("");

  // waiting for server response
  const [busyLogIn, setBusyLogIn] = useState(false);

  // for redirecting
  const location = useHistory("");
  const { doLogin } = useContext(UserAuthContext);

  const togglePasswordVisibility = () => {
    if (inputType === "password") {
      setInputType("text");
      setPasswordIcon("eye icon");
      return;
    }
    setInputType("password");
    setPasswordIcon("eye slash icon");
  };

  const onType = ({ target }) => {
    switch (target.name) {
      case "loginEmail":
        setEmail(target.value);
        break;
      case "loginPassword":
        setPassword(target.value);
    }
  };

  const onChangeCheckbox = () => {
    setRememberMe(!rememberMe);
  };

  const loginSubmit = async (event) => {
    event.preventDefault();
    setValidationError("");
    setServerError("");
    const loginData = {
      email,
      password,
    };
    const { value, error } = validateLoginObject.validate(loginData);
    if (error) {
      setValidationError(error.details[0].message);
      return;
    }
    setBusyLogIn(true);
    try {
      const response = await fetcher("/api/user/login", null, loginData);
      if (!response.success) {
        setServerError(response.payload.message);
      }
      if (response.success) {
        doLogin(response.payload);
        setBusyLogIn(false);
        location.push("/user");
      }
    } catch (err) {
      console.log(err);
    }
    setBusyLogIn(false);
  };

  const redirectToRegister = (event) => {
    event.preventDefault();
    location.push("/signup");
  };

  return (
    <section className="container">
      <h1>Login</h1>
      <div className="loginContainer">
        <form className={"ui form " + (busyLogIn && "loading")}>
          <div className={"field required " + ((validationError.length > 0) ? "error" : "")}>
            <label>Email:</label>
            <input
              name="loginEmail"
              placeholder="Email Address"
              value={email}
              onChange={(event) => onType(event)}
            />
          </div>
          <div className={"field required " + ((validationError.length > 0) ? "error" : "")}>
            <label>Password:</label>
            <input
              name="loginPassword"
              type={inputType}
              placeholder="Password"
              value={password}
              onChange={(event) => onType(event)}
            />
            <div className="passwordIcon">
              <i
                className={passwordIcon}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>
          <div className="field ">
            <label>* - required</label>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                value={rememberMe}
                onChange={onChangeCheckbox}
              />
              <label>Remember me?</label>
            </div>
          </div>
          {((validationError.length > 0) ?
            <p className="signUpError">{validationError}</p> : null)}
          {(serverError.length > 0 ?
            <p className="signUpError">{serverError}</p> :
            null)}
          <button className="ui animated button" onClick={loginSubmit}>
            <div className="visible content">Login</div>
            <div className="hidden content">
              <i aria-hidden="true" className="sign-in icon"></i>
            </div>
          </button>
          <span> Or </span>
          <button className="ui animated button" onClick={redirectToRegister}>
            <div className="visible content">Register</div>
            <div className="hidden content">
              <i aria-hidden="true" className="signup icon"></i>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
