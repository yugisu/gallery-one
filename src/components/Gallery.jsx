import React, { useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { GalleryImage } from './GalleryImage';

const Container = styled.div`
  display: grid;
  padding: 3rem;
  gap: 1rem;

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

const fadeIn = keyframes`
  from {
    background: rgba(0, 0, 0, 0.0);
  }
  to {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const appear = keyframes`
  0% {
    transform: scale(0.97);
    box-shadow: none;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
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
    max-height: 80vh;
    max-width: 70vw;
    height: auto;
    width: auto;

    animation: ${appear} 250ms forwards;
  }
`;

const getNextIndex = (max, current, change) => (max + current + change) % max;

export function Gallery({ images = [] }) {
  const [focused, setFocused] = useState(null);

  const handleImageToggle = useCallback(
    (newFocused) => (e) => {
      e.stopPropagation();

      return setFocused((prevFocused) => {
        if (!prevFocused) {
          return newFocused;
        }
        return prevFocused === newFocused ? null : newFocused;
      });
    },
    []
  );

  const getImageByIndexDiff = useCallback(
    (indexDiff) => {
      const currentIndex = images.indexOf(focused);
      const newIndex = getNextIndex(images.length, currentIndex, indexDiff);

      return images[newIndex] || focused;
    },
    [focused, images]
  );

  return (
    <Container>
      {images.map((img) => (
        <GalleryImage src={img} onSelect={handleImageToggle} key={img} />
      ))}

      {focused && (
        <Preview onClick={() => setFocused(null)}>
          <GalleryImage
            src={getImageByIndexDiff(-1)}
            onSelect={handleImageToggle}
            alt="Kitten pic"
          />

          <GalleryImage
            src={focused}
            onSelect={() => (e) => e.stopPropagation()}
            alt="Kitten pic"
          />

          <GalleryImage
            src={getImageByIndexDiff(1)}
            onSelect={handleImageToggle}
            alt="Kitten pic"
          />
        </Preview>
      )}
    </Container>
  );
}
