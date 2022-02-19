import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ICON_DICTIONARY } from '../../core/constants';
import { flexWrapCenterCss, flexWrapCss } from '../../core/utils';

export const PageLayout: FC = () => (
  <PageWrapper>
    <Header>
      <img src={ICON_DICTIONARY.LOGO} alt="musinsa-logo" />
    </Header>
    <Main>
      <Outlet />
    </Main>
  </PageWrapper>
);

const PageWrapper = styled.div`
  max-width: 400px;
  height: 100%;
  margin: 0 auto;
`;

const Header = styled.header`
  ${flexWrapCenterCss};
  height: 50px;
`;

const Main = styled.main`
  ${flexWrapCss};
  padding: 0;
  margin: 0 auto;
`;
