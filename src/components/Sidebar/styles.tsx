import styled from 'styled-components';

export const Container = styled.aside`
  max-width: 102px;
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  position: fixed;
  padding: 20px;
  text-decoration: none;
  box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.03);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1100px) {
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    a + a {
      margin-top: 60px;
    }
  }

  button {
    background-color: transparent;
    border: 0;
  }
`;
