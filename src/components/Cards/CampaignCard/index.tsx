import { ReactElement } from 'react';

import { Container } from './styles';

export function CampaignCard(): ReactElement {
  return (
    <Container to="/campaign/123">
      <div className="header">
        <div>
          <p>Campanha</p>
          <h3>xPTO</h3>
        </div>
        <p>Status: XXXXXX</p>
      </div>
      <div className="info">
        <p>Editoria: XXXXXX</p>
      </div>
    </Container>
  );
}
