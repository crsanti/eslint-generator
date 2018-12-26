import * as React from 'react';
import { Description } from '../description';
import { Title } from '../title';
import { Types } from '../types';

export const Details: React.StatelessComponent = () => (
  <>
    <Title />
    <Types />
    <Description />
  </>
);
