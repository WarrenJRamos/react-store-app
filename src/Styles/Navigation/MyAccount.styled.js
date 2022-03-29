import styled from 'styled-components';
import manwoman from '../../Images/Account/manwoman.png';

export const MyAccountContainer = styled.div`
  /* height: 100vh;
  color: ${(props) => props.colorCultured};
  padding-top: 100px; */
  /* background: linear-gradient(to left, #eee, #333); */
  /* background: linear-gradient(
    to left,
    ${(props) => props.colorFogra},
    ${(props) => props.colorTeal}
  ); */
  height: 110vh;
  color: ${(props) => props.colorCultured};
  background-color: ${(props) => props.colorBlack};
  padding: 48px;
  .top {
    height: 30%;
    /* background: url(${manwoman});
    background-repeat: no-repeat;
    background-size: cover; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-family: ${(props) => props.font};
      letter-spacing: 2px;
      text-transform: uppercase;
      text-align: center;
      font-size: 3rem;
      color: ${(props) => props.colorMaize};
    }
    p {
      text-align: center;
      letter-spacing: 2px;
    }
  }

  .bottom {
    height: 70%;
    display: grid;
    grid-template-areas:
      'sidenav sidenavcontent sidenavcontent sidenavcontent'
      'sidenav sidenavcontent sidenavcontent sidenavcontent'
      'sidenav sidenavcontent sidenavcontent sidenavcontent';
    grid-template-columns: 1fr 2fr;

    .sidenav {
      grid-area: sidenav;
      border-right: 2px solid lightgray;

      &__list {
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 50px;
        text-align: right;

        &-item {
          padding-right: 20px;
          width: 100%;

          a {
            display: block;
            width: 100%;
            padding: 5px 30px;
            color: ${(props) => props.colorCultured};
            text-decoration: none;

            &.link--active {
              /* background-color: ${(props) => props.colorMaize}; */
              border-bottom: 3px solid ${(props) => props.colorMaize};
              /* border-left: 5px solid ${(props) => props.colorMaize}; */
            }
          }
        }
      }
    }
  }
`;

export const MyAccountContentContainer = styled.div`
  /* background-color: blue; */
  grid-area: sidenavcontent;
`;
