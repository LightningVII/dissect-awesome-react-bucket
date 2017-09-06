import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { white, grey600 } from 'material-ui/styles/colors';

const Logged = (props: any) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon color={grey600} /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

const SearchField = <TextField hintText="Search" underlineShow={false} />

const MainHeader = () => (
    <AppBar
        title={SearchField}
        titleStyle={{ textOverflow: 'initial' }}
        style={{ backgroundColor: white }}
        iconElementRight={<Logged />}
        zDepth={1} />
);

export default MainHeader