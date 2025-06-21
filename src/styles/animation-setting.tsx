import { keyframes } from 'styled-components';

export const fadeSlideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const fadeSlideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
