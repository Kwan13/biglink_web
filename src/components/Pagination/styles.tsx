import styled from 'styled-components';
import { shade } from 'polished';

interface PageButtonProps {
  active: boolean;
}

export const Container = styled.ul`
  list-style: none;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: right;

  @media (max-width: 500px) {
    justify-content: center;
  }

  li {
    & + li {
      margin-left: 8px;
    }

    .pageActive {
      background: ${shade(0.2, '#6cc8fc')};
      font-weight: bold;
      border: none;
    }
  }
`;

export const PageButton = styled.button<PageButtonProps>`
  background: transparent;
  padding: 5px;
  color: ${props => (props.active ? `${shade(0.2, '#6cc8fc')}` : '#6cc8fc')};
  border: 0;
  border-radius: 3px;
  font-size: 20px;
`;

export const NextPrevButton = styled.button`
  padding: 5px;
  background: var(--blue-50);
  color: var(--white);
  border: 0;
  border-radius: 3px;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.2, '#6cc8fc')};
  }
`;
