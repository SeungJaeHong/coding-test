import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ICON_DICTIONARY } from '../../core/constants';

export const FixedHeader = styled.header`
  width: 375px;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

export const PageLayout: FC = () => (
  <div>
    <FixedHeader>
      <img
        width="280"
        height="16"
        src={ICON_DICTIONARY.LOGO}
        alt="musinsa-logo"
      />
    </FixedHeader>
    <main>
      <Outlet />
    </main>
  </div>
);
