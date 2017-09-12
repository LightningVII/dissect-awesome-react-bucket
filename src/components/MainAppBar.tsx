import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from './actions/Common.actions';
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

const MainHeader = (props: any) => {
    const handleCloseMenu = () => {
        props.actions.setMenuState({ open: true })
    }
    return (
        <section>
            <AppBar
                onLeftIconButtonTouchTap={handleCloseMenu}
                title={SearchField}
                titleStyle={{ textOverflow: 'initial' }}
                style={{ backgroundColor: white }}
                iconElementRight={<Logged />}
                zDepth={1} />
        </section>
    )
};

const mapStateToProps = (state: any) => state.commonState;

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators<any>(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);