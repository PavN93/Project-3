import React, { useContext, useState } from "react";
import fetcher from "../../functions/fetcher";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";
import UserAuthContext from "../../context/UserAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState("eye slash icon");
  const [inputType, setInputType] = useState("password");
  const location = useHistory();
  const { doLogin } = useContext(UserAuthContext);

  // componentDidMount() {
  //   if (localStorage.checkbox && localStorage.email !== "") {
  //     this.setState({
  //       isChecked: true,
  //       email: localStorage.email,
  //       password: localStorage.password,
  //     });
  //   }
  // }

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
    const loginData = {
      email,
      password,
    };
    const response = await fetcher("/api/login", null, loginData);
    if (response.success) {
      doLogin(response.payload);
      location.push("/user");
    }
  };

  const toRegister = (event) => {
    event.preventDefault();
    location.push("/signup");
  };

  return (
    <section className="container">
      <h1>Login</h1>
      <div className="loginContainer">
        <form className="ui form">
          <div className="field">
            <input
              name="loginEmail"
              placeholder="Email Address"
              value={email}
              onChange={(event) => onType(event)}
            />
          </div>
          <div className="field">
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
          <button className="ui animated button" onClick={loginSubmit}>
            <div className="visible content">Login</div>
            <div className="hidden content">
              <i aria-hidden="true" className="sign-in icon"></i>
            </div>
          </button>
          <span> Or </span>
          <button className="ui animated button" onClick={toRegister}>
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
