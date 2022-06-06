import {
  SelectHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from 'react';

import { Container, Content } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  shadow?: boolean;
  background?: string;
  borderRadius?: string;
  height?: string;
  error?: string;
  children: ReactNode;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  {
    children,
    name,
    label,
    shadow,
    height,
    borderRadius,
    background,
    error,
    ...rest
  },
  ref,
) => {
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}

      <Content
        background={background}
        shadow={shadow}
        borderRadius={borderRadius}
        height={height}
        isErrored={!!error}
      >
        <select id={name} name={name} ref={ref} {...rest}>
          {children}
        </select>
      </Content>
      {error && <span className="errorMessage">{error}</span>}
    </Container>
  );
};

export const Select = forwardRef(SelectBase);
