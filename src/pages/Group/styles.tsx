import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 102px);
  margin-left: 102px;

  @media (max-width: 1100px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;

  .projectDetails {
    @media (max-width: 1100px) {
      max-width: 1100px;
      margin: 150px auto 40px;
    }

    p {
      color: var(--gray-300);
      font-size: 14px;

      span {
        font-weight: 700;
      }
    }
  }

  > button {
    display: none;

    @media (max-width: 1100px) {
      max-width: 300px;
      width: 100%;
      height: 50px;
      border: 2px solid var(--blue-50);
      color: var(--blue-50);
      border-radius: 11px;
      background-color: var(--gray-50);
      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-left: 10px;
      }
    }
  }

  form {
    max-width: 1200px;
    width: 100%;
    border-radius: 15px;
    background-color: var(--white);
    padding: 20px;
    margin-top: 40px;
    box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.03);

    .formContent {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 20px;

      @media (max-width: 1100px) {
        flex-direction: column;
        gap: 20px;
      }

      .inputGroup {
        width: 100%;
      }
    }

    .buttonContainer {
      margin-top: 30px;

      button[type='submit'] {
        margin: 0 0 0 auto;

        @media (max-width: 1100px) {
          margin: 0 auto;
        }
      }
    }
  }

  .gridTitle {
    margin-top: 40px;

    p {
      font-size: 20px;
      font-weight: 300;
    }

    h3 {
      font-size: 40px;
      font-weight: 700;
    }
  }

  .campaignsGrid {
    max-width: 1200px;
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }
`;
