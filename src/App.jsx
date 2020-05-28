import React from 'react';
import styled from 'styled-components';

import { Gallery } from './Gallery';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function App() {
  return (
    <Container>
      <Gallery />
    </Container>
  );
}
