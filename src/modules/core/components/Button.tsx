import styled from 'styled-components';
import { ButtonProps } from '../theme.type';
import {
  addButtonBorderByBgColor,
  addButtonShapeByType,
  findBackgroundColorByType,
  findColorByType,
  findSpacingByType,
  flexAlignCenterCss,
  flexWrapCenterBetweenCss,
  flexWrapCss,
} from '../utils';

export const Button = styled.button<ButtonProps>`
  ${flexWrapCss};
  ${flexAlignCenterCss};
  flex-direction: row;
  padding: 7px 15px;

  ${addButtonShapeByType};
  ${findColorByType};
  ${findBackgroundColorByType};
  ${addButtonBorderByBgColor};
  ${findSpacingByType};
`;

export const CircleButton = styled(Button)<ButtonProps>`
  max-height: 35px;
`;

export const CircleButtonWithIcon = styled(Button)<ButtonProps>`
  ${flexWrapCenterBetweenCss};
  padding: 7px 12px 7px 15px;
`;

export const SquareButtonWithIcon = styled(Button)<ButtonProps>`
  ${flexWrapCenterBetweenCss};
  ${addButtonShapeByType({ shape: 'square' })};
  padding: 4px 11px 4px 10px;
`;
