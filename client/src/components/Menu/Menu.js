import React from "react";

import "./Menu.css"

const Menu = () => {
  return (
    <div className='clover-div'>
      <img className='clover-logo' src={`${process.env.PUBLIC_URL}/logo.png`} alt="Plantica Logo"></img>
    </div>
  );
};

export default Menu;
