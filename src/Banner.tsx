//Banner contains Nav functionality as well
import React from 'react';

const Banner = () => {
  return (
    <nav>
      <img id="nav-left" src="https://iili.io/HQZL9ln.png" alt="logo">
  
      </img>

      <div></div>

      <div id="nav-right">
        <h2 className="navbarheading">Weight</h2>
        <h2 className="navbarheading">Temperature</h2>
        <h2 className="navbarheading">Currency</h2>
      </div>
    </nav>
  );
};

export default Banner;
