import { InputHTMLAttributes, useState, SetStateAction } from 'react';
import { IconBaseProps } from 'react-icons';

import { Tag } from '../../Tag';

import { Container, Content, TagsContainer } from './styles';

interface InputTagProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
  shadow?: boolean;
  background?: string;
  borderRadius?: string;
  height?: string;
  setTagList: React.Dispatch<SetStateAction<string[]>>;
  tagList: string[];
  error?: string;
}

export function InputTag({
  name,
  label,
  shadow,
  height,
  borderRadius,
  background,
  icon: Icon,
  tagList,
  setTagList,
  error,
  ...rest
}: InputTagProps) {
  const [inputValue, setInputValue] = useState('');

  function handleAddKeyword(key: string) {
    const keyWordExists = tagList.some(word => word === inputValue);

    if (key === 'Space' && tagList.length < 10) {
      if (!keyWordExists && inputValue !== '') {
        setTagList(oldState => [...oldState, inputValue]);
      }

      setInputValue('');
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
        <input
          id={name}
          name={name}
          value={inputValue}
          maxLength={20}
          onKeyDown={e => handleAddKeyword(e.code)}
          onChange={e => {
            setInputValue(e.target.value.trim());
          }}
          {...rest}
        />
        {Icon && <Icon size={20} color="#a6a6a6" />}
      </Content>

      {error && <span className="errorMessage">{error}</span>}
      {tagList.length !== 0 && (
        <TagsContainer>
          {tagList.map(item => (
            <Tag
              key={item}
              name={item}
              tagList={tagList}
              setTagList={setTagList}
            />
          ))}
        </TagsContainer>
      )}
    </Container>
  );
}
