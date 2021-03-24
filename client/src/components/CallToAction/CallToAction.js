import React from "react";
import { Link } from "react-router-dom";
import "./CallToAction.css";

const SignUp = () => {
  return (
    <div className="ui container callToAction">
      <div className="ui stackable relaxed divided two column grid">
        <div className="column">
          <h2>Join the Plantica community.</h2>
          <img className="leafImage" src={`${process.env.PUBLIC_URL}/Leaves/leaf_3.png`}
        alt="Leaf"/>
        </div>
        <div className="column">
          <h2>Sign up today</h2>
          <Link to="/signup">
          <button className="ui button createAccountBtn">Create an account</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
