import styled from 'styled-components';

export const ConfirmPasswordChangedContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  background-color: var(--blue-50);

  .leftSideInformationContainer {
    padding: 7%;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .leftSideInformationTitle {
      font-family: K2D-Bold;
      color: white;
      font-size: 70px;
    }

    .leftSideInformationSubTitle {
      font-family: K2D-Regular;
      color: white;
      width: 70%;
      font-size: 30px;
      margin-top: 30px;
    }

    .buttonSubmit {
      margin-top: 100px;
      width: 40%;
      height: 60px;
      border-width: 0px;
      background-color: white;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;

      color: var(--blue-50);
      font-family: K2D-SemiBold;
      font-size: 20px;

      transition: filter 0.2s;

      .arrowRight {
        display: flex;
        margin-left: 10px;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .leftSideInformationContainer {
      width: 70%;
    }

    .rightSidePresentationContainer {
      width: 30%;
      .iconLove {
        background-color: blue;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .leftSideInformationContainer {
      width: 100%;
    }

    .rightSidePresentationContainer {
      width: 30%;
    }
  }

  @media only screen and (max-width: 1000px) {
    .leftSideInformationContainer {
      width: 100%;

      .leftSideInformationSubTitle {
        width: 100%;
      }

      .buttonSubmit {
        width: 80%;
      }
    }

    .rightSidePresentationContainer {
      display: none;
    }
  }

  @media only screen and (max-width: 700px) {
    .leftSideInformationContainer {
      .buttonSubmit {
        width: 100%;
      }
    }
  }
`;

export const LootieContainer = styled.div`
  width: 40%;
  height: 100%;
  position: absolute;
  right: 10%;

  @media (max-width: 1500px) {
    right: 5%;
  }

  @media (max-width: 1200px) {
    right: 0;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
