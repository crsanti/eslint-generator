import * as React from 'react';
import { HeaderComponent } from './headerComponent';

export class HeaderContainer extends React.PureComponent<{}, {}> {
  constructor(props) {
    super(props);
  }

  onImport = (event: React.MouseEvent<HTMLInputElement>) => {
    // TODO: Implement real method.
    console.log(event.currentTarget.value);
  }

  onSave = (event: React.MouseEvent<HTMLInputElement>) => {
    // TODO: Implement real method.
    console.log(event.currentTarget.value);
  }

  onSearch = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // TODO: Implement real method.
    console.log(event.currentTarget.value);
  }

  render() {
    return (
      <HeaderComponent
        onImport={this.onImport}
        onSave={this.onSave}
        onSearch={this.onSearch}
      />
    );
  }
}
