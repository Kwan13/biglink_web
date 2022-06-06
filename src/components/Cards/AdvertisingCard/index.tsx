import { ReactElement } from 'react';

import { Container } from './styles';

export function AdvertisingCard(): ReactElement {
  return (
    <Container to="/advertising/123">
      <div className="header">
        <div>
          <p>Anúncio</p>
          <h3>xPTO</h3>
        </div>
        <p>Status: XXXXXX</p>
      </div>
      <div className="info">
        <p>XXXXXX</p>
      </div>
    </Container>
  );
}
