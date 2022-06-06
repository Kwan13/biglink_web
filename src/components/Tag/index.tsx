import { ReactElement, SetStateAction } from 'react';
import { FiXCircle } from 'react-icons/fi';

import { Container } from './styles';

interface TagProps {
  name: string;
  setTagList: React.Dispatch<SetStateAction<string[]>>;
  tagList: string[];
}

export function Tag({ name, setTagList, tagList }: TagProps): ReactElement {
  function handleDelete() {
    const filteredTags = tagList.filter(tag => tag !== name);

    setTagList(filteredTags);
  }

  return (
    <Container>
      <span>{name}</span>
      <button type="button" onClick={handleDelete}>
        <FiXCircle />
      </button>
    </Container>
  );
}
