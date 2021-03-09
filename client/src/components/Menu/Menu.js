import React from "react";
import "./Menu.css"

const Menu = () => {
  return (
    <div className='clover-div'>
      <img className='clover-logo' src={`${process.env.PUBLIC_URL}/logo.png`}></img>
    </div>
  );
};

export default Menu;
