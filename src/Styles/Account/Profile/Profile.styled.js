import styled from "styled-components";

export const AccountContainer = styled.div`
  background-color: #e2c044;
  /* background-color: #d3d0cb; */
  height: 100%;
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 140px;
  border-left: 5px solid #f0f6f6;

  &.profile {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & h3 {
      font-size: 20px;
      font-weight: bold;
    }

    & p {
      font-size: 16px;
      font-weight: normal;
    }

    .profile__section {
      display: flex;
      flex-direction: column;
      gap: 10px;

      &::after {
        margin-top: 10px;
        content: "";
        height: 5px;
        display: block;
        background-color: #587b7f;
      }
    }

    .profile__about {
      &-name {
      }
      &-email {
      }
    }
  }
`;
