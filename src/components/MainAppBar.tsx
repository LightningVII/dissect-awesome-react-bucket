import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions/Common.actions';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { red400, grey100, grey300 } from 'material-ui/styles/colors';

const More = (props: {}) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton>
                <MoreVertIcon color={grey300} />
            </IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

const Menu = (props: {}) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton>
                <MenuIcon color={grey300} />
            </IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    />
);

const SearchField = (
    <TextField
        hintStyle={{ left: '20px' }}
        inputStyle={{
            width: '95%',
            paddingLeft: '5%'
        }}
        style={{
            backgroundColor: grey100,
            borderRadius: '3px',
            height: '40px',
            lineHeight: '16px'
        }}
        hintText="Search"
        underlineShow={false}
    />
);

const MainHeader = (props: {
    actions: {
        setMenuState: Function;
    };
}) => {
    const handleCloseMenu = () => {
        props.actions.setMenuState({ open: true });
    };
    return (
        <section>
            <AppBar
                onLeftIconButtonTouchTap={handleCloseMenu}
                title={SearchField}
                titleStyle={{ textOverflow: 'initial' }}
                iconStyleLeft={{ color: grey300 }}
                style={{ backgroundColor: red400 }}
                iconElementLeft={<Menu />}
                iconElementRight={<More />}
                zDepth={1}
            />
        </section>
    );
};

const mapStateToProps = (state: { commonState: Function }) => state.commonState;

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators<any>(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
