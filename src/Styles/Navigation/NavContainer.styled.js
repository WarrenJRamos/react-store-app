import styled from "styled-components";

export const NavContainer = styled.div`
  &.nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: black;
    z-index: 1000;

    transition: background-color 1s;

    &:hover {
      /* background-color: ${(props) => props.theme.colors.colorOnyx}; */
      background-color: rgba(226, 192, 68, 1);
    }
    .nav {
      /* &__top {
        &-container {
          padding: 5px;
          width: 100%;
          height: 45px;
          color: ${(props) => props.theme.colors.colorCultured};
          background-color: ${(props) => props.theme.colors.colorOnyx};
          display: flex;
          justify-content: space-between;
          align-items: center;

          .socialIcons {
            margin-left: 10px;
            gap: 5px;
            display: flex;
          }

          .account {
            margin-right: 10px;
            &-link {
              text-decoration: none;
              display: flex;
              align-items: center;
              gap: 5px;
              color: ${(props) => props.theme.colors.colorCultured};
            }
          }
        }
      } */

      &__main {
        width: 100%;
        height: 60px;
        color: white;
        /* color: ${(props) => props.theme.colors.colorTeal}; */
        /* background: ${(props) => props.theme.colors.colorTimberWolf}; */
        box-shadow: 0px 2px 2px rgba(213, 210, 210, 0.15);
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* position: sticky; */

        .title {
          .item {
            margin-left: 25px;
            font-weight: 700;
            font-size: 25px;
            line-height: 29px;
            color: white;
            /* color: ${(props) => props.theme.colors.colorTeal}; */
            text-decoration: none;
          }
        }

        .nav-container {
          .list {
            display: flex;
            gap: 50px;
            font-weight: 600;
            font-size: 16px;
            text-transform: uppercase;
            line-height: 23px;
            margin-bottom: 0px;
            li {
              list-style: none;
              .item {
                text-decoration: none;
                color: white;
                /* color: ${(props) => props.theme.colors.colorOnyx}; */
              }
            }
          }
        }

        .actions {
          display: flex;
          align-items: center;

          .account {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .cart {
            margin-right: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
          }
        }
      }
    }
    /* &.nav__main{
        background: black;
    } */
  }
`;
