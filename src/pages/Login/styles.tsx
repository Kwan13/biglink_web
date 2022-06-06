import styled from 'styled-components';

export const LoginMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .formSide {
    padding: 5%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--gray-30);

    .presentationFormTitleContainer {
      width: 80%;
      display: flex;
      align-self: center;

      .presentationFormTitle {
        font-family: K2D-Bold;
        color: black;
        text-align: center;
        display: flex;
        align-self: center;
        font-size: 60px;
      }
    }

    .formContainer {
      margin-top: 40px;
      width: 90%;
      align-self: center;
      padding: 20px;
      display: flex;
      flex-direction: column;

      .forgotPasswordLink {
        font-family: K2D-SemiBold;
        color: black;
        text-decoration: none;
        font-size: 20px;
        display: flex;
        align-self: flex-end;
        margin: 20px 0 50px 0;
      }
    }
  }

  .presentationBarSide {
    width: 50%;
    background-color: var(--blue-50);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5%;

    .logoBoxContainer {
      width: 75%;
      height: 200px;
      display: flex;
      align-self: center;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;

      .logoBox {
        width: 30%;
        height: 90%;
        background-color: white;
        border-radius: 25px;
      }

      .presentationNameContainer {
        width: 65%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .presentationNameTitle {
          font-family: K2D-Bold;
          color: white;
          width: 100%;
          font-size: 100px;
        }

        .presentationNameSubTitle {
          font-family: K2D-Regular;
          color: white;
          flex: 1;
          font-size: 30px;
        }
      }
    }

    .presentationTextContainer {
      width: 100%;
      margin-top: 30px;
      display: flex;
      justify-content: center;

      .presentationText {
        font-family: K2D-SemiBold;
        color: white;
        width: 90%;
        font-size: 20px;
        align-self: center;
        text-align: justify;
        display: flex;
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    .presentationBarSide {
      display: none;
    }

    .formSide {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1500px) {
    .presentationBarSide {
      .logoBoxContainer {
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;

        .logoBox {
          display: none;
        }

        .presentationNameContainer {
          width: 90%;
        }
      }
    }
  }
`;
