import styled from 'styled-components';
import { TypographyProps } from '../theme.type';
import {
  addTextDecoration,
  findColorByType,
  findFontSizeByType,
  findFontWeightByType,
} from '../utils';

export const Typography = styled.p<TypographyProps>`
  ${findColorByType};
  ${findFontWeightByType};
  ${findFontSizeByType}
  ${addTextDecoration};
`;
