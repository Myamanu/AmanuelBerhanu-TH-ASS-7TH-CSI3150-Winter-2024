import React from "react";
import Pictr from "../../assets/logo.jpg";
import "./Hero.css";
function Hero() {
  return (
    <>
      <img src={Pictr} alt="This is background pictu for Oakland Hope" />;
      <h1>Oakland Hope:Inspiring Hope for Tomorrow"</h1>
      <h2>"Empower Hope, Ignite Change: Join Oakland's Volunteer Movement."</h2>
      <button> Learn More </button>
    </>
  );
}

export default Hero;
