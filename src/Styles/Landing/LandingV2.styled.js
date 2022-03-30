import styled from "styled-components";
import hero from "../../Images/Landing/herofashion.jpg";

const LandingContainer = styled.div`
  height: 100vh;
  width: 100%;
  /* border: 2px solid red; */
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0.5)),
    url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;

  .hero {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__tagline {
      text-transform: uppercase;
      font-size: 5rem;
      font-family: "poppins", "sans-serif";
      transform: translateY(-50px);
      opacity: 0;
      transition: all 2s ease-in-out;

      .x {
        color: #e2c044;
      }

      &--active {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &__bottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      font-size: 1.3rem;

      .cta-group {
        .hero__cta--primary {
          text-transform: uppercase;
          color: white;
          border: none;
          background: transparent;
          cursor: pointer;
          border-bottom: 1px solid white;
          transition: all 0.5s ease-in-out;

          &:hover {
            color: #e2c044;
            border-bottom: 1px solid #e2c044;
          }
        }
      }
    }
  }
`;

export { LandingContainer };
