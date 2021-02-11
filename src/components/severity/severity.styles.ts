import { css } from 'emotion';
import { red, amber } from '@material-ui/core/colors';

export const severity = css`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
`;

export const buttonContainer = css`
  margin-top: 1.2rem;
`;

export const errorButton = css`
  border-color: ${red[500]} !important;
  color: ${red[500]} !important;
`;

export const warningButton = css`
  border-color: ${amber[500]} !important;
  color: ${amber[500]} !important;
`;
