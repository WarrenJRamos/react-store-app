import styled from "styled-components";
import hero from "../../Images/Landing/hero1.jpg";

const LandingContainer = styled.div`
  height: 100vh;
  width: 100%;
  /* border: 2px solid red; */
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0.5)),
    url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;
  color: white;

  .hero {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__tagline {
      font-size: 4rem;
    }
    &__bottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .cta-group {
        .hero__cta--primary {
          color: white;
          border: none;
          background: transparent;
          cursor: pointer;
          border-bottom: 1px solid white;
        }
      }
    }
  }
`;

export { LandingContainer };
