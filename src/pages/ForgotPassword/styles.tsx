import styled from 'styled-components';

export const ForgotPasswordSetupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .formSide {
    padding: 7%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f6f7fb;

    .forgotTitle {
      font-family: K2D-Bold;
      color: black;
      width: 100%;
      font-size: 60px;
      margin-bottom: 100px;
    }
<<<<<<< HEAD:src/pages/ForgotPassword/styles.scss
=======

    .buttonSubmit {
      margin-top: 50px;
      width: 100%;
      height: 60px;
      border-width: 0px;
      background-color: var(--blue-50);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;

      color: white;
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
>>>>>>> 5dd76aea824a2092c5a2aba27cd90417574d07a6:src/pages/ForgotPassword/styles.tsx
  }

  @media only screen and (max-width: 900px) {
    .formSide {
      width: 100%;
    }

    .presentationBarSide {
      display: none;
    }
  }
`;
