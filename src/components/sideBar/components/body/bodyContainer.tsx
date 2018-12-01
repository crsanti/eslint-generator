import * as  React from 'react';
import { Rules } from './model';
import { ruleList } from './mockData';

interface State {
  ruleList: Rules[];
}

export class BodyContainer extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);
    this.state = { ruleList };
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}
