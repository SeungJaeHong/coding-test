import { FC } from 'react';
import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  .spinner {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 2px solid transparent;
    animation: spin 1s linear infinite;

    background: linear-gradient(white, white),
      conic-gradient(from 0.15turn, white, #000000);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface SimpleSpinnerProps {
  loading: boolean;
}

export const SimpleSpinner: FC<SimpleSpinnerProps> = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <SpinnerWrapper>
      <div className="spinner"></div>
    </SpinnerWrapper>
  );
};
