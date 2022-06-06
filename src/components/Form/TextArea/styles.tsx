import styled, { css } from 'styled-components';

interface TextAreaElementProps {
  height?: string;
  shadow?: boolean;
  background?: string;
  isErrored: boolean;
}

export const Container = styled.div`
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

export const TextAreaElement = styled.textarea<TextAreaElementProps>`
  height: ${props => (props.height ? props.height : '200px')};
  width: 100%;
  border: 0;
  background-color: ${props => props.background && props.background};
  border-radius: 9px;
  padding: 10px;
  outline: none;
  resize: vertical;
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
  display: block;
`;
