import { ReactElement } from 'react';

import { Container } from './styles';

export function GroupCard(): ReactElement {
  return (
    <Container to="/group/123">
      <div className="header">
        <div>
          <p>Grupo</p>
          <h3>xPTO</h3>
        </div>
        <p>Status: XXXXXX</p>
      </div>
      <div className="info">
        <p>Segmentação: XXXXXX</p>
      </div>
    </Container>
  );
}
