import React from "react";
import { LandingContainer } from "../../Styles/Landing/LandingV2.styled";
import Carousel from "./Carousel";
import LandingSale from "./LandingSale";

export default function LandingV2() {
  return (
    <LandingContainer>
      <div className="hero">
        <h1 className="hero__tagline">Lorem ipsum dolor</h1>
        <div className="hero__bottom">
          <p className="hero__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
            lacus eros. Morbi tincidunt sit
          </p>
          <div className="cta-group">
            <button className="hero__cta--primary">
              Discover our collection
            </button>
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
