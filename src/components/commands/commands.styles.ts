import { css } from 'emotion';
import grey from '@material-ui/core/colors/grey';

export const container = css`
  border-bottom: 1px solid ${grey[300]};
  padding: 0.8rem;
`;

export const buttonsContainer = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const button = css`
  background-color: ${grey[50]};
  & + & {
    margin-left: 1rem;
  }
`;

export const icon = css`
  margin-right: 0.4rem;
`;
