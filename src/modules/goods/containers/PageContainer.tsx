import { FC } from 'react';
import { GoodsSearchBoxContainer } from '.';
import { PageLayout } from '../../common/components';
import { SearchBoxDivider } from '../components';

export const PageContainer: FC = () => {
  return (
    <PageLayout
      header={
        <>
          <GoodsSearchBoxContainer />
          <SearchBoxDivider />
        </>
      }
    />
  );
};
