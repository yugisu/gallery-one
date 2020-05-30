import React from 'react';
import styled from 'styled-components';

const Inner = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;

  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 3px 5px rgba(0, 0, 0, 0.2);
`;

export function GalleryImage({ src, onSelect }) {
  return <Inner src={src} onClick={onSelect?.(src)} alt="Kitten pic" />;
}
