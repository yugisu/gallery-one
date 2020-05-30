import React, { useCallback, useState, useMemo } from 'react';

import { GalleryImage } from 'components/GalleryImage';

import * as S from './styled';

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
    <S.Container>
      <S.ImagesContainer>
        {images.map((img, idx) => (
          <GalleryImage src={img} onClick={handleImageToggle(idx)} key={img} />
        ))}
      </S.ImagesContainer>
      <S.Toolbar>
        <S.AddButton>+</S.AddButton>
      </S.Toolbar>

      {focusedIdx !== null && indexes && (
        <S.Preview onClick={() => setFocusedIdx(null)}>
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
        </S.Preview>
      )}
    </S.Container>
  );
}
