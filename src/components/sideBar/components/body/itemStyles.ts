import { css } from 'emotion';
import blue from '@material-ui/core/colors/blue';

// TODO: move to common colors file
const colorItem = blue[300];

export const item = css`
  list-style: none;
  font-size: 0.8rem;
  font-family: none;
  line-height: 2.5;
  & :hover {
    color: ${colorItem};
    cursor: pointer;
  }
`;
