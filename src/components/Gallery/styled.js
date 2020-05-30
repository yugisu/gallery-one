import styled from 'styled-components';

import { fadeIn, zoomIn } from 'utils/keyframes';

export const Container = styled.div`
  padding: 0.5rem 0.5rem 3rem;

  border-radius: 0.45rem;
  background: linear-gradient(to bottom, #222 90%, transparent);
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.4);
`;

export const ImagesContainer = styled.div`
  display: grid;
  gap: 0.5rem;

  grid-template-columns: repeat(3, 250px);
  grid-auto-rows: 250px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 200px);
    grid-auto-rows: 200px;
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 150px);
    grid-auto-rows: 150px;
  }
`;

export const Preview = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(0, 0, 0, 0.6);

  animation: ${fadeIn} 250ms forwards;

  img {
    max-height: 70vh;
    max-width: 60vw;
    height: auto;
    width: auto;

    animation: ${zoomIn} 250ms forwards;
  }

  > :first-child,
  > :last-child {
    max-height: 30vh;
    max-width: 15vh;
    margin: 0 1rem;
  }
`;
