import { useState } from "react";
import validateSingupObject from '../../functions/validateInput';
import "./SignUpForm.css";
import fetcher from '../../functions/fetcher';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ passwordsMatch, setPasswordsMatch ] = useState(true);
  const location = useHistory();

  const onType = ({ target }) => {
    switch (target.name) {
      case 'username':
        setUsername(target.value);
        break;
      case 'email':
        setEmail(target.value);
        break;
      case 'password':
        setPassword(target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(target.value);
    }
  }

  /* left to do:
  * error handling
  * spinner for busy status
  * let user know that signup is successful before redirecting
  */
  const signupSubmit = async (event) => {
    event.preventDefault();
    const signupData = {
      username, 
      password,
      email
    }
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    validateSingupObject.validate(signupData)
    try {
      const response = await fetcher('/api/signup', null, signupData);
      if (response.success) {
        location.push('/login');
      }
    } catch (err) {
      console.log(err);
    }
  }

  const toLogin = (event) => {
    event.preventDefault();
    location.push('/login');
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
          <button className="ui animated button" onClick={signupSubmit}>
            <div className="visible content">Sign Up</div>
            <div className="hidden content">
              <i aria-hidden="true" className="signup icon"></i>
            </div>
          </button>
          <span> Or </span>
          <button className="ui animated button" onClick={toLogin}>
            <div className="visible content">Login</div>
            <div className="hidden content">
              <i aria-hidden="true" className="sign-in icon"></i>
            </div>
          </button>
        </form>
        <p>By clicking the Sign Up button, you agree to our Terms and Conditions.</p>
      </div>
    </section>
  );
};

export default SignUp;