import {
  SelectHTMLAttributes,
  SetStateAction,
  ReactNode,
  ReactElement,
} from 'react';

import { Tag } from '../../Tag';

import { Container, Content } from './styles';

interface SelectTagProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  shadow?: boolean;
  background?: string;
  borderRadius?: string;
  height?: string;
  error?: string;
  setTagList: React.Dispatch<SetStateAction<string[]>>;
  tagList: string[];
  children: ReactNode;
}

export function SelectTag({
  children,
  name,
  label,
  shadow,
  height,
  borderRadius,
  background,
  setTagList,
  tagList,
  error,
  ...rest
}: SelectTagProps): ReactElement {
  function handleSetTag(name: string) {
    if (name !== '') {
      const squareAlreadyExists = tagList.some(tag => tag === name);

      if (!squareAlreadyExists) {
        setTagList(oldState => [...oldState, name]);
      }
    }
  }

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
        <select
          id={name}
          name={name}
          onChange={e => handleSetTag(e.target.value)}
          {...rest}
        >
          {children}
        </select>
      </Content>

      {error && <span className="errorMessage">{error}</span>}
      {tagList.length !== 0 && (
        <div className="tagContainer">
          {tagList.map(tag => (
            <Tag
              key={tag}
              name={tag}
              setTagList={setTagList}
              tagList={tagList}
            />
          ))}
        </div>
      )}
    </Container>
  );
}
