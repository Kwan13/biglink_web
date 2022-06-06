import {
  TextareaHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef,
} from 'react';

import { Container, TextAreaElement } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  height?: string;
  label?: string;
  shadow?: boolean;
  background?: string;
  error?: string;
}

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
  { name, height, shadow, background = '#FFFFFF', label, error, ...rest },
  ref,
) => {
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}

      <TextAreaElement
        name={name}
        height={height}
        background={background}
        shadow={shadow}
        isErrored={!!error}
        ref={ref}
        {...rest}
      />
      {error && <span className="errorMessage">{error}</span>}
    </Container>
  );
};

export const TextArea = forwardRef(TextAreaBase);
