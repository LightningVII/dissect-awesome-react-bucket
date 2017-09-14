import * as React from 'react';
import MobileTearSheet from './view/MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import { styles } from './index.d';
const styles: styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 10
  }
};

const ListExampleSettings = () => (
  <div style={styles.root}>
    <MobileTearSheet>
      <List>
        <ListItem
          primaryText="When calls and notifications arrive"
          secondaryText="Always interrupt"
        />
      </List>
      <Divider />
      <List>
        <Subheader>Priority Interruptions</Subheader>
        <ListItem primaryText="Events and reminders" rightToggle={<Toggle />} />
        <ListItem primaryText="Calls" rightToggle={<Toggle />} />
        <ListItem primaryText="Messages" rightToggle={<Toggle />} />
      </List>
      <Divider />
      <List>
        <Subheader>Hangout Notifications</Subheader>
        <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
      </List>
    </MobileTearSheet>
  </div>
);

export default ListExampleSettings;
