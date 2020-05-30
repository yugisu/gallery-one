import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    background: rgba(0, 0, 0, 0.0);
  }
  to {
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const zoomIn = keyframes`
  0% {
    transform: scale(0.97);
    box-shadow: none;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
  }
`;
