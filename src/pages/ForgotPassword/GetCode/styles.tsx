import styled from 'styled-components';

export const ForgotPasswordCodeContainer = styled.div`
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
    background-color: var(--gray-30);

    .forgotTitle {
      font-family: K2D-Bold;
      color: black;
      width: 100%;
      font-size: 60px;
      margin-bottom: 100px;
    }
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
