import styled from 'styled-components';

import { fadeIn } from 'utils/keyframes';

export const Background = styled.div`
  border-radius: 0.45rem;
  margin: 3rem 0;
  background: linear-gradient(
    45deg,
    #f09433,
    #e6683c,
    #dc2743,
    #cc2366,
    #bc1888
  );
`;

export const Container = styled.div`
  border-radius: 0.45rem;
  background: linear-gradient(
    to bottom,
    rgba(34, 34, 34, 0.8) 90%,
    transparent
  );
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5), 0 0 3px rgba(0, 0, 0, 0.3);
`;

export const ImagesContainer = styled.div`
  display: grid;
  padding: 0.5rem;
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

  img {
    opacity: 0.8;
    transition: opacity 250ms;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

    &:hover {
      opacity: 1;
    }
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

    box-shadow: 0 5px 15px -4px rgba(0, 0, 0, 0.5);
  }

  > :first-child,
  > :last-child {
    max-height: 30vh;
    max-width: 15vh;
    margin: 0 1rem;
  }
`;

export const Toolbar = styled.div`
  height: 3rem;

  padding: 0.35rem 1rem 0.75rem;
  display: flex;
  align-items: center;
`;

export const TextButton = styled.button`
  padding: 0.25rem;

  color: #222;
  font-weight: bold;

  background: transparent;
  border: none;
  cursor: pointer;

  &:focus,
  &:hover {
    text-decoration: underline;
    outline: none;
  }
`;

export const AddButton = styled.button`
  margin-left: auto;
  height: 1.5rem;
  min-width: 1.5rem;

  padding: 0;
  padding-top: 0.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #222;
  font-weight: bold;

  background: transparent;
  border: none;
  user-select: none;
  cursor: pointer;
  border-radius: 0.75rem;
  box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.6),
    0 0px 5px -1px rgba(0, 0, 0, 0.4);
  transition: box-shadow 250ms;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.6),
      0 0px 5px -1px rgba(0, 0, 0, 0.4),
      inset 0 2px 5px -2px rgba(255, 255, 255, 0.1);
  }
`;
