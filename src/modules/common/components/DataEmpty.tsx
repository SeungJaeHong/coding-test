import { FC } from 'react';
import { ICON_DICTIONARY } from '../../core/constants';

interface DataEmptyProps {
  visible: boolean;
}

export const DataEmpty: FC<DataEmptyProps> = ({ visible, children }) => {
  if (visible) {
    return (
      <>
        <img src={ICON_DICTIONARY.EMPTY} alt="empty" />
        {children}
      </>
    );
  }
  return null;
};
