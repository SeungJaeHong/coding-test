import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ICON_DICTIONARY } from '../../core/constants';
import { flexWrapCenterCss, flexWrapCss } from '../../core/utils';
import { SearchBoxDivider } from '../../goods/components';
import { GoodsSearchBoxContainer } from '../../goods/containers';

export const PageLayout: FC = () => (
  <PageWrapper>
    <Header>
      <img src={ICON_DICTIONARY.LOGO} alt="musinsa-logo" />
      <GoodsSearchBoxContainer />
      <SearchBoxDivider />
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
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 1;

  > img {
    padding: 17px 0;
  }
`;

const Main = styled.main`
  ${flexWrapCss};
  margin: 0 auto;
`;
