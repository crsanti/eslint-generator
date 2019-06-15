import { orange, blueGrey } from '@material-ui/core/colors';
import { css } from 'emotion';

export const typeUse = css`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const buttonContainer = css`
  margin-top: 1.2rem;
`;

export const button = css`
  margin-right: 2rem!important;
`;

export const buttonJavaScript = css`
  background-color: ${orange[500]}!important;
  color: ${blueGrey[600]};
  font-size: 0.8rem!important;

  &:hover {
    background-color: ${orange[700]}!important;
  }
`;

export const icon = css`
  margin-right: 0.4rem;
`;
