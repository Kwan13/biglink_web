import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1200px;
  width: 100%;
  /* height: 80px; */
  margin: 0 auto;
  padding: 20px;
  transition: background-color 0.5s;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .TitleBox {
    min-width: 155px;

    p {
      font-size: 20px;
    }

    h1 {
      font-weight: 700;
      font-size: 40px;
    }
  }

  .searchBar {
    max-width: 690px;
    width: 100%;
    padding: 10px 20px;
    border-radius: 18px;
    border: 0;
    margin: 0 20px;
    outline: none;
  }

  .headerButton {
    max-width: 220px;
    width: 100%;
    height: 56px;
    border: 2px solid var(--blue-50);
    border-radius: 18px;
    background: var(--blue-50);
    color: white;
    font-family: K2D-Bold;
  }

  .headerButtonDisabled {
    max-width: 220px;
    width: 100%;
    height: 56px;
    opacity: 0.5;
    cursor: not-allowed;
    border: 2px solid var(--blue-50);
    border-radius: 18px;
    background: var(--blue-50);
    color: white;
    font-family: K2D-Bold;
  }

  @media (max-width: 1100px) {
    background: var(--white);
    position: fixed;

    .searchBar {
      display: none;
    }

    .headerButton {
      display: none;
    }
  }
`;
