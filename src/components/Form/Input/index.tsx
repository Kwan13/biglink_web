import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Content } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
  shadow?: boolean;
  background?: string;
  borderRadius?: string;
  height?: string;
  error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    shadow,
    height,
    borderRadius,
    background,
    error,
    icon: Icon,
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
        <input id={name} name={name} ref={ref} {...rest} />
        {Icon && <Icon size={20} color="#a6a6a6" />}
      </Content>
      {error && <span className="errorMessage">{error}</span>}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
