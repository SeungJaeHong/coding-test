import { css } from 'styled-components';
import {
  FONT_SIZE_DICTIONARY,
  FONT_WEIGHT_DICTIONARY,
  HELPER_COLOR_DICTIONARY,
  SPACING_SIZE_DICTIONARY,
} from '../constants';
import {
  ButtonProps,
  FontSizeProps,
  FontWeightProps,
  HelperColorProps,
  TypographyProps,
  ButtonShapeProps,
  SpacingProps,
} from '../theme.type';

export const findFontSizeByType = ({ size = 'sm' }: FontSizeProps) => {
  return css`
    font-size: ${FONT_SIZE_DICTIONARY[size]};
  `;
};

export const findColorByType = ({ $color = 'primary' }: HelperColorProps) => {
  return css`
    color: ${HELPER_COLOR_DICTIONARY[$color]};
  `;
};

export const findSpacingByType = ({ spacing = '0' }: SpacingProps) => {
  return css`
    gap: ${SPACING_SIZE_DICTIONARY[spacing]};
  `;
};

export const findBackgroundColorByType = ({
  bgColor = 'inverse',
}: ButtonProps) => {
  if (bgColor === 'inverse') {
    return css`
      ${findColorByType({ $color: 'primary' })};
      background-color: ${HELPER_COLOR_DICTIONARY[bgColor]};
    `;
  }
  return css`
    border: none;
    ${findColorByType({ $color: 'inverse' })};
    background-color: ${HELPER_COLOR_DICTIONARY[bgColor]};
  `;
};

export const addButtonBorderByBgColor = ({
  theme,
  bgColor = 'inverse',
}: ButtonProps) => {
  return css`
    border: ${bgColor === 'inverse'
      ? `1px solid ${theme.color.contrast.brightGrey}`
      : 'none'};
  `;
};

export const addButtonShapeByType = ({
  shape = 'circle',
}: ButtonShapeProps) => {
  return css`
    border-radius: ${shape === 'circle' ? '18px' : '4px'};
  `;
};

export const findFontWeightByType = ({
  weight = 'normal',
}: FontWeightProps) => {
  return css`
    font-weight: ${FONT_WEIGHT_DICTIONARY[weight]};
  `;
};

export const addTextDecoration = ({ through }: TypographyProps) => {
  return css`
    text-decoration: ${through ? 'line-through' : 'none'};
  `;
};
