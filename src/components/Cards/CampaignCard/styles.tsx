import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  height: 265px;
  border-radius: 23px;
  background-color: var(--white);
  padding: 20px;
  margin: 0 auto;
  text-decoration: none;
  box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.03);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div.header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    div {
      p {
        font-size: 20px;
        font-weight: 300;
        color: var(--black);
      }

      h3 {
        font-size: 40px;
        font-weight: 700;
        color: var(--blue-50);
      }
    }

    > p {
      color: var(--gray-100);
      font-size: 16px;
      font-weight: 500;
    }
  }

  div.info {
    p {
      font-size: 16px;
      color: var(--black);
      line-height: 30px;
    }
  }
`;
