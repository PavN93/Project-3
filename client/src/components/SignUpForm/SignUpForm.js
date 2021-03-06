import { useState } from "react";
import { validateSignupObject } from "../../functions/validateInput";
import "./SignUpForm.css";
import fetcher from "../../functions/fetcher";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  // Form fields values
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // password visibility
  const [passwordIcon, setPasswordIcon] = useState("eye slash icon");
  const [inputType, setInputType] = useState("password");

  // waiting for server response
  const [busySignUp, setBusySignUp] = useState(false);
  // error on submitting signup credentials
  const [validationError, setValidationError] = useState("");
  // server error response
  const [serverError, setServerError] = useState("");
  // for redirecting
  const location = useHistory("");

  const onType = ({ target }) => {
    switch (target.name) {
      case "username":
        setUsername(target.value);
        break;
      case "email":
        setEmail(target.value);
        break;
      case "dateOfBirth":
        setDateOfBirth(target.value);
        break;
      case "currentCity":
        setCurrentCity(target.value);
        break;
      case "password":
        setPassword(target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(target.value);
        break;
      default:
        break;
    }
  };

  const signupSubmit = async (event) => {
    event.preventDefault();
    setValidationError("");
    setServerError("");
    const signupData = {
      username,
      dateOfBirth,
      currentCity,
      password,
      email,
    };
    const { value, error } = validateSignupObject.validate(signupData);
    if (error) {
      setValidationError(error.details[0].message);
      return;
    }
    if (password !== confirmPassword) {
      setValidationError("Passwords do not match");
      return;
    }
    setBusySignUp(true);
    try {
      const response = await fetcher("/api/user/signup", null, signupData);
      if (!response.success) {
        setServerError(response.payload.message);
      }
      if (response.success) {
        setBusySignUp(false);
        location.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
    setBusySignUp(false);
  };

  const redirectToLogin = (event) => {
    event.preventDefault();
    location.push("/login");
  };

  const togglePasswordVisibility = () => {
    if (inputType === "password") {
      setInputType("text");
      setPasswordIcon("eye icon");
      return;
    }
    setInputType("password");
    setPasswordIcon("eye slash icon");
  };

  return (
    <section className="ui container signupWrapper">
      <h1>Create an account</h1>
      <motion.div
        initial={{ x: 0, y: 150, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          delay: 1,
          default: { duration: 1 },
        }}
        className="signupContainer"
      >
        <form className={"ui form " + (busySignUp && "loading")}>
        <p>It's free and only takes a minute</p>
          <div
            className={"field " + (validationError.length > 0 ? "error" : "")}
          >
            <label>Username: *</label>
            <input
              placeholder="Username"
              onChange={(event) => onType(event)}
              name="username"
              value={username}
            />
          </div>
          <div
            className={"field " + (validationError.length > 0 ? "error" : "")}
          >
            <label>Email: *</label>
            <input
              placeholder="Email Address"
              onChange={(event) => onType(event)}
              name="email"
              value={email}
            />
          </div>
          <div
            className={"field " + (validationError.length > 0 ? "error" : "")}
          >
            <label>Date of birth:</label>
            <input
              placeholder="YYYY-MM-DD"
              onChange={(event) => onType(event)}
              name="dateOfBirth"
              value={dateOfBirth}
            />
          </div>
          <div
            className={"field " + (validationError.length > 0 ? "error" : "")}
          >
            <label>Location:</label>
            <input
              placeholder="Current location"
              onChange={(event) => onType(event)}
              name="currentCity"
              value={currentCity}
            />
          </div>
          <div
            className={"field " + (validationError.length > 0 ? "error" : "")}
          >
            <label>Password: *</label>
            <input
              placeholder="Password"
              onChange={(event) => onType(event)}
              name="password"
              type={inputType}
              value={password}
            />
            <div className="passwordIconSignUp">
              <i
                className={passwordIcon}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>
          <div
            className={"field " + (validationError.length > 0 ? "error" : "")}
          >
            <label>Confirm password: *</label>
            <input
              placeholder="Confirm Password"
              onChange={(event) => onType(event)}
              name="confirmPassword"
              type="password"
              value={confirmPassword}
            />
          </div>
          <div className="field ">
            <label>* - required</label>
          </div>
          {validationError.length > 0 ? (
            <p className="signUpError">{validationError}</p>
          ) : null}
          {serverError.length > 0 ? (
            <p className="signUpError">{serverError}</p>
          ) : null}
          <button className="ui animated button" onClick={signupSubmit}>
            <div className="visible content">Sign Up</div>
            <div className="hidden content">
              <i aria-hidden="true" className="signup icon"></i>
            </div>
          </button>
          <p>
            By clicking the Sign Up button, you agree to our Terms and Conditions.
        </p>
          <p className="ui container loginLink">
            Already a member?{" "}
            <a href="false" onClick={(event) => redirectToLogin(event)}>
              Log in
            </a>{" "}
            now.
          </p>
        </form>
      </motion.div>
    </section>
  );
};

export default SignUp;
