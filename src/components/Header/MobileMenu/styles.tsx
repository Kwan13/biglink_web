import styled from 'styled-components';

export const Button = styled.button`
  width: 43px;
  height: 43px;
  border: 2px solid var(--blue-50);
  border-radius: 8px;

  display: none;

  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  position: fixed;
  max-width: 500px;
  width: 100%;
  height: 100vh;
  background: var(--gray-50);
  right: -100%;
  top: 118px;
  transition: 850ms;
  padding: 0 20px;
  display: none;

  @media (max-width: 1100px) {
    display: block;
  }

  .searchBox {
    max-width: 317px;
    width: 100%;
    margin: 40px auto 0;
  }

  h3 {
    color: var(--gray-300);
    margin: 40px 0;

    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 2px;
      background: var(--gray-60);
      margin-right: 16px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 2px;
      background: var(--gray-60);
      margin-left: 16px;
    }
  }

  a {
    max-width: 317px;
    width: 100%;
    height: 54px;
    border: 2px solid var(--blue-50);
    border-radius: 11px;
    margin: 0 auto;
    text-decoration: none;
    padding: 0 20px;
    font-weight: 500;
    background: var(--blue-50);
    color: var(--white);
    transition: filter 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 20px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  &.showMenu {
    right: 0;
    transition: 350ms;
  }
`;
