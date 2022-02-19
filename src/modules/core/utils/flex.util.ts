import { css } from 'styled-components';

export const flexWrapCss = css`
  display: flex;
  flex-wrap: wrap;
`;

export const flexAlignCenterCss = css`
  align-items: center;
`;

export const flexJustifyCenterCss = css`
  justify-content: center;
`;

export const flexJustifyBetweenCss = css`
  justify-content: space-between;
`;

export const flexWrapAlignCenterCss = css`
  ${flexWrapCss};
  ${flexAlignCenterCss};
`;

export const flexWrapCenterCss = css`
  ${flexWrapCss};
  ${flexAlignCenterCss};
  ${flexJustifyCenterCss};
`;

export const flexWrapCenterBetweenCss = css`
  ${flexWrapCss};
  ${flexAlignCenterCss};
  ${flexJustifyBetweenCss};
`;
