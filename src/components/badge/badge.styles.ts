import { css } from 'emotion';

// TODO: Remove color related styles for being customized from outside
export const text = css`
  background-color: rgba(0, 0, 0, 0.12);
  border-radius: 15px;
  color: rgba(0, 0, 0, 0.26);
  font-size: 0.65rem;
  font-weight: bold;
  padding: 8px 12px;
  text-transform: uppercase;
`;

export const container = css`
  display: inline-block;
  & + & {
    margin-left: 1rem;
  }
`;
