import React, { useState, useEffect } from "react";
import { LandingContainer } from "../../Styles/Landing/LandingV2.styled";
import Carousel from "./Carousel";
import LandingSale from "./LandingSale";

export default function LandingV2() {
  const [effect, setEffect] = useState(false);

  // Be defiant, be yourself. This is the new era. Choose SXU.

  useEffect(() => {
    console.log("Inside use effect");
    // const timeout = setTimeout(() => {
    setEffect(true);
    // }, 2000);
    // return timeout;
  }, []);

  return (
    <LandingContainer>
      <div className="hero">
        <h1
          className={`hero__tagline ${effect ? "hero__tagline--active" : ""}`}
        >
          S<span className="x">X</span>U Collection
        </h1>
        <div className="hero__bottom">
          <p className="hero__content">
            Be defiant, be yourself. This is the new era. Choose SXU.
          </p>
          <div className="cta-group">
            <button className="hero__cta--primary">View now</button>
          </div>
        </div>
      </div>
      {/* <div style={{ position: "relative" }}>
        <Carousel classes="landing" />
      </div> */}
      {/* <LandingSale classes="landing" /> */}
    </LandingContainer>
  );
}
