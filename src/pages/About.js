import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Freddy's Pizzeria has been delivering a great-quality, casual dining experience since 2016. We have built our reputation on out steak, pizza, pasta and ribs. This is complemented with an extensive drinks list which includes fresh juices and smoothies, local and imported beers, and an extensive wine list.
        Ever popular with expatriate families, couples and groups of friends, Freddy's Pizzeria evinces a clean, comfortable and casual feel and is a welcoming oasis amid the hustle and bustle where you get great quality food, amazing customer service and great value.
        </p>
      </div>
    </div>
  );
}

export default About;
