import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as React from 'react';
import { ruleList } from './mockdata';

export const RuleList: React.StatelessComponent = () => (
  <List>
    {ruleList.map((rule) => (
      <ListItem key={rule}>
        <ListItemText>{rule}</ListItemText>
      </ListItem>
    ))}
  </List>
);
