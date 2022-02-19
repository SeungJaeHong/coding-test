import { FC } from 'react';
import styled from 'styled-components';

export const Loader = styled.div`
  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid black;
    border-right: 3px solid transparent;
    animation: rotation 1s linear infinite;
  }
`;

export const Spinner: FC<any> = () => (
  <Loader>
    <span className="loader"></span>
  </Loader>
);
