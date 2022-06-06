import styled from 'styled-components';

export const PresentationBarSide = styled.div`
  width: 50%;
  background-color: var(--blue-50);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5%;

  .lottieContainer {
    width: 100%;
  }

  .informationContainer {
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    padding-top: 30px;

    .titleForgot {
      font-family: K2D-Bold;
      color: white;
      font-size: 45px;
    }

    .subTitleForgot {
      font-family: K2D-SemiBold;
      color: white;
      margin-top: 20px;
      display: flex;
      text-align: justify;
      font-size: 25px;
    }
  }
`;
