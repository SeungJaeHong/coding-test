import styled, { css } from 'styled-components';
import { ThemeType, HelperColorType, FontSizeType } from '../../core/theme';
import { findColorByType, findFontSizeByType } from '../../core/utils';

interface TypographyProps {
  theme: ThemeType;
  $color?: HelperColorType;
  bold?: boolean;
  size?: FontSizeType;
}

export const Typography = styled.p<TypographyProps>`
  ${({ $color }) => css`
    color: ${findColorByType($color)};
  `}
  ${({ bold }) => css`
    font-weight: ${bold ? 700 : 500};
  `}
  ${({ size = 'sm' }) => css`
    font-size: ${findFontSizeByType(size)};
  `}
`;
