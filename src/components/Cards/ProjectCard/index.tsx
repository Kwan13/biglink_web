import { ReactElement } from 'react';
import { ProjectInterface } from '../../../interfaces/ProjectInterface';

import { Container } from './styles';

interface projectProps {
  data: ProjectInterface;
}

export function ProjectCard({ data }: projectProps): ReactElement {
  return (
    <Container to={`/project/${data._id}`}>
      <div className="header">
        <div>
          <p>Projeto</p>
          <h3>{data.name}</h3>
        </div>
        <p>Status: {data.status}</p>
      </div>
      <div className="info">
        <p>Criado em: {data.createdAt.date}</p>
        <p>Atualizado em: {data.updatedAt.date}</p>
      </div>
    </Container>
  );
}
