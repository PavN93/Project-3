import React, { useContext, useState } from "react";
import fetcher from "../../functions/fetcher";
import "./LoginForm.css";
import { useHistory } from 'react-router-dom';
import UserAuthContext from '../../context/UserAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState('eye slash icon');
  const [inputType, setInputType] = useState('password');
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
    if (inputType === 'password') {
      setInputType('text');
      setPasswordIcon('eye icon');
      return;
    }
    setInputType('password');
    setPasswordIcon('eye slash icon');
  }

  const onType = ({ target }) => {
    switch (target.name) {
      case 'loginEmail':
        setEmail(target.value);
        break;
      case 'loginPassword':
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
      password
    }
    const response = await fetcher('/api/login', null, loginData);
    if (response.success) {
      doLogin(response.payload);
      location.push('/user');
    }
  };

  const toRegister = (event) => {
    event.preventDefault();
    location.push('/signup');
  }

  return (
    <section className="container">
      <div className="loginContainer">
        <h1>Login</h1>
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
                onClick={togglePasswordVisibility}></i>
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
          <button className="ui animated button"
          onClick={loginSubmit}
          >
            <div className="visible content">Login</div>
            <div className="hidden content">
              <i aria-hidden="true" className="sign-in icon"></i>
            </div>
          </button>
          <span> Or </span>
          <button className="ui animated button"
          onClick={toRegister}>
            <div className="visible content">Register</div>
            <div className="hidden content">
              <i aria-hidden="true" className="signup icon"></i>
            </div>
          </button>

        </form>
      </div>
    </section>
  );

}
// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//     isChecked: false,
//     icon: "eye slash icon",
//     inputType: "password",
//   };

//   componentDidMount() {
//     if (localStorage.checkbox && localStorage.email !== "") {
//       this.setState({
//         isChecked: true,
//         email: localStorage.email,
//         password: localStorage.password,
//       });
//     }
//   }

//   togglePassword = () => {
//     let { icon, inputType } = this.state;
//     this.setState({
//       icon: icon === "eye slash icon" ? "eye icon" : "eye slash icon",
//       inputType: inputType === "password" ? "text" : "password",
//     });
//   };

//   onChangeValue = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   onChangeCheckbox = (event) => {
//     this.setState({
//       isChecked: event.target.checked,
//     });
//   };

//   loginSubmit = () => {
//     const { email, password, isChecked } = this.state;
//     if (isChecked && email !== "") {
//       localStorage.email = email;
//       localStorage.password = password;
//       localStorage.checkbox = isChecked;
//     }
//   };

//   render() {
//     const { email, password, isChecked, inputType, icon } = this.state;
//     return (
//       <section className="container">
//         <div className="loginContainer">
//           <h1>Login</h1>
//           <form className="ui form">
//             <div className="field">
//               <input
//                 name="email"
//                 placeholder="Email Address"
//                 value={email}
//                 onChange={this.onChangeValue}
//               />
//             </div>
//             <div className="field">
//               <input
//                 name="password"
//                 type={inputType}
//                 placeholder="Password"
//                 value={password}
//                 onChange={this.onChangeValue}
//               />
//               <div className="passwordIcon">
//                 <i className={icon} onClick={this.togglePassword}></i>
//               </div>
//             </div>
//             <div className="field">
//               <div className="ui checkbox">
//                 <input
//                   type="checkbox"
//                   value={isChecked}
//                   onChange={this.onChangeCheckbox}
//                 />
//                 <label>Remember me?</label>
//               </div>
//             </div>
//             <button className="ui animated button" onClick={this.loginSubmit}>
//               <div className="visible content">Login</div>
//               <div className="hidden content">
//                 <i aria-hidden="true" className="sign-in icon"></i>
//               </div>
//             </button>
//           </form>
//           <p>Not a member? Sign up today.</p>
//         </div>
//       </section>
//     );
//   }
// }

export default Login;
