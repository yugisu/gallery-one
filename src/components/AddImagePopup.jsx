import React, { useState } from 'react';
import styled from 'styled-components';

import { fadeIn } from 'utils/keyframes';

const Overlay = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.6);

  animation: ${fadeIn} 250ms forwards;
`;

const Container = styled.div``;

const Input = styled.input``;

const SubmitButton = styled.button``;

export function AddImagePopup({ onImageAdd, onClose }) {
  const [imageLink, setImageLink] = useState('');

  const handleImageAdd = () => {
    if (imageLink) {
      const imgElement = new Image();

      imgElement.src = imageLink;

      console.log(imgElement);

      imgElement.onerror = (e) => {
        console.log({ src: e.target.src, imageLink });

        setImageLink('');
      };
      imgElement.onload = () => onImageAdd(imageLink);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Input
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
          autoFocus
        />
        <SubmitButton onClick={handleImageAdd}>Add image</SubmitButton>
      </Container>
    </Overlay>
  );
}
