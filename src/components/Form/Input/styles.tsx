import styled, { css } from 'styled-components';

interface ContentProps {
  shadow?: boolean;
  background?: string;
  height?: string;
  borderRadius?: string;
  isErrored: boolean;
}

interface ContainerProps {
  maxWidth?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  label {
    font-size: 20px;
    font-weight: 500;
    line-height: 16px;
    margin-bottom: 10px;
    display: block;
  }

  & + div {
    margin-top: 20px;
  }

  .errorMessage {
    color: var(--error);
  }
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  background-color: ${props =>
    props.background ? props.background : '#ffffff'};
  height: ${props => (props.height ? props.height : '44px')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '9px')};
  padding: 0 15px;
  ${props =>
    props.shadow &&
    css`
      box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.03);
    `}
  ${props =>
    props.isErrored &&
    css`
      border: 1px solid var(--error);
    `}


  display: flex;
  align-items: center;

  input {
    flex: 1;
    border: 0;
    background-color: transparent;
    outline: none;

    &::placeholder {
      color: var(--gray-300);
    }
  }

  svg {
    margin-left: 8px;
  }
`;
