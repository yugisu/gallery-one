import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

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

const Container = styled.div`
  height: 3rem;
  width: 30rem;

  display: flex;

  color: #eee;
  font-size: 1.3rem;

  background: #222;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.6),
    0 0px 5px -1px rgba(0, 0, 0, 0.4);
`;

const Input = styled.input`
  flex: 1;
  height: 100%;

  padding: 0 1rem;

  color: inherit;
  font-size: inherit;

  border-radius: 0.5rem 0 0 0.5rem;
  border: none;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  flex-shrink: 0;

  height: 3rem;
  width: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: inherit;
  font-size: inherit;

  border-radius: 0 0.5rem 0.5rem 0;
  border: none;
  user-select: none;
  cursor: pointer;
  background: transparent;

  transition: background-color 250ms;

  &:hover,
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.02);
  }

  &:active {
    outline: none;
    background: rgba(255, 255, 255, 0.05);
  }
`;

export function AddImagePopup({ onImageAdd, onClose }) {
  const [imageLink, setImageLink] = useState('');

  const handleImageAdd = () => {
    if (imageLink) {
      const imgElement = new Image();

      imgElement.src = imageLink;

      imgElement.onerror = () => setImageLink('');
      imgElement.onload = () => (onImageAdd(imageLink), onClose());
    }
  };

  return (
    <Overlay onMouseDown={onClose}>
      <Container onMouseDown={(e) => e.stopPropagation()}>
        <Input
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
          placeholder="Paste the link to the photo here..."
          autoFocus
        />
        <SubmitButton onClick={handleImageAdd}>
          <FiPlus />
        </SubmitButton>
      </Container>
    </Overlay>
  );
}
