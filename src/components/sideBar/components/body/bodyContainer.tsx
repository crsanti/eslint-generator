import * as  React from 'react';
import { Rules } from './model';
import { ruleList } from './mockData';
import { ListComponent } from './listComponent';

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
      <ListComponent
        ruleList={this.state.ruleList}
      />
    );
  }
}
