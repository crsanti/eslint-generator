import { css } from 'emotion';
import amber from '@material-ui/core/colors/amber';

export const severity = css`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
`;

export const textSpan = css`
  font-weight: bold;
`;

export const buttonContainer = css`
  margin-top: 1.2rem;
`;

export const warningButton = css`
  border-color: ${amber[500]};
  color: ${amber[500]};
`;
