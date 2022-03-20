import React from "react";
import { LandingContainer } from "../../Styles/Landing/LandingV2.styled";
import Carousel from "./Carousel";

export default function LandingV2() {
  return (
    <LandingContainer>
      <div class="hero">
        <h1 class="hero__tagline">All the items you could ever dream of</h1>
        <div class="hero__bottom">
          <p class="hero__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
            lacus eros. Morbi tincidunt sit
          </p>
          <div class="cta-group">
            <button class="hero__cta--primary">Discover our collection</button>
          </div>
        </div>
      </div>
    </LandingContainer>
  );
}
