import React, { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';

import { fadeIn, zoomIn } from '../utils/keyframes';

import { GalleryImage } from './GalleryImage';

const Container = styled.div`
  padding: 0.5rem 0.5rem 3rem;

  border-radius: 0.45rem;
  background: linear-gradient(to bottom, #222 90%, transparent);
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.4);
`;

const ImagesContainer = styled.div`
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

const Preview = styled.div`
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

const getNextIndex = (max, current, change) => (max + current + change) % max;

export function Gallery({ images = [] }) {
  const [focusedIdx, setFocusedIdx] = useState(null);

  const indexes = useMemo(
    () =>
      focusedIdx === null
        ? null
        : {
            prev: getNextIndex(images.length, focusedIdx, -1),
            next: getNextIndex(images.length, focusedIdx, 1),
          },
    [images.length, focusedIdx]
  );

  const handleImageToggle = useCallback(
    (newFocused) => (e) => {
      e.stopPropagation();

      setFocusedIdx((prevFocused) =>
        prevFocused === newFocused ? null : newFocused
      );
    },
    []
  );

  return (
    <Container>
      <ImagesContainer>
        {images.map((img, idx) => (
          <GalleryImage src={img} onClick={handleImageToggle(idx)} key={img} />
        ))}
      </ImagesContainer>

      {focusedIdx !== null && indexes && (
        <Preview onClick={() => setFocusedIdx(null)}>
          <GalleryImage
            src={images[indexes.prev]}
            onClick={handleImageToggle(indexes.prev)}
            alt="Kitten pic"
          />

          <GalleryImage
            src={images[focusedIdx]}
            onClick={(e) => e.stopPropagation()}
            alt="Kitten pic"
          />

          <GalleryImage
            src={images[indexes.next]}
            onClick={handleImageToggle(indexes.next)}
            alt="Kitten pic"
          />
        </Preview>
      )}
    </Container>
  );
}
