import styled from 'styled-components';

export const Container = styled.div`
  background: var(--gray-55);
  border-radius: 20px;
  padding: 3px 10px;
  /* margin: 0 auto; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: 0;
    margin-left: 8px;

    display: flex;
    align-items: center;
  }
`;
