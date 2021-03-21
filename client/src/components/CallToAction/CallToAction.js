import React from "react";
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
          <button className="ui button createAccountBtn"><a href="/signup">Create an account</a></button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
