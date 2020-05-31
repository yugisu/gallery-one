import React, { useCallback, useState, useMemo } from 'react';
import { FiTrash, FiPlus } from 'react-icons/fi';

import { GalleryImage } from 'components/GalleryImage';
import { AddImagePopup } from 'components/AddImagePopup';

import * as S from './styled';

const getNextIndex = (max, current, change) => (max + current + change) % max;

export function Gallery({ images = [], addImage, deleteImage }) {
  const [addImageShown, setAddImageShown] = useState(true);

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

  const handleDeleteButtonClick = useCallback(
    (e) => {
      e.stopPropagation();

      deleteImage(images[focusedIdx]);
    },
    [deleteImage, focusedIdx, images]
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
    <S.Background>
      <S.Container>
        <S.ImagesContainer>
          {images.map((img, idx) => (
            <GalleryImage
              src={img}
              onClick={handleImageToggle(idx)}
              key={idx}
            />
          ))}
        </S.ImagesContainer>
        <S.Toolbar>
          <S.AddButton
            onClick={() => setAddImageShown(true)}
            title="Add a new image"
          >
            <FiPlus color="#fff" />
          </S.AddButton>
        </S.Toolbar>

        {focusedIdx !== null && indexes && (
          <S.Preview onClick={() => setFocusedIdx(null)}>
            <GalleryImage
              src={images[indexes.prev]}
              onClick={handleImageToggle(indexes.prev)}
              alt="Kitten pic"
            />

            <S.PreviewFocus>
              <GalleryImage
                src={images[focusedIdx]}
                onClick={(e) => e.stopPropagation()}
                alt="Kitten pic"
              />
              <S.DeleteButton onClick={() => deleteImage(images[focusedIdx])}>
                <FiTrash color="#fff" />
              </S.DeleteButton>
            </S.PreviewFocus>

            <GalleryImage
              src={images[indexes.next]}
              onClick={handleImageToggle(indexes.next)}
              alt="Kitten pic"
            />
          </S.Preview>
        )}

        {addImageShown && (
          <AddImagePopup
            onImageAdd={addImage}
            onClose={() => setAddImageShown(false)}
          />
        )}
      </S.Container>
    </S.Background>
  );
}
