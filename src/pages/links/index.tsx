import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../../common/actions';
import routers from '../../constants/Routers';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';

const style = {
    paper: {
        width: '94%',
        margin: '10px auto',
        display: 'flex'
    },
    rightIcon: {
        textAlign: 'center',
        lineHeight: '24px'
    }
};

interface MenuItemProps {
    to: string;
    primaryText: string;
    leftIcon: React.ReactElement<any>;
}

const data: Array<MenuItemProps> = [
    { to: '/', primaryText: 'Preview', leftIcon: <RemoveRedEye /> },
    { to: '/links', primaryText: 'Share', leftIcon: <PersonAdd /> },
    { to: '/list', primaryText: 'Get links', leftIcon: <ContentLink /> },
    { to: '', primaryText: '', leftIcon: <Divider /> },
    { to: '/', primaryText: 'Make a copy', leftIcon: <ContentCopy /> },
    { to: '/links', primaryText: 'Download', leftIcon: <Download /> },
    { to: '', primaryText: '', leftIcon: <Divider /> },
    { to: '/list', primaryText: 'Remove', leftIcon: <Delete /> }
];
const ContentLinks = (props: any) => {
    let toHref: string = '/', selectedIndex: number = 0;
    const handleSelectNav = (event: any) => {
        event.preventDefault();
        toHref = event.currentTarget.getAttribute('href');
        selectedIndex = routers.indexOf(toHref);
        props.actions.setBottomNavState({ selectedIndex: selectedIndex });
        props.history.push(toHref);
    };
    return (
        <Paper style={style.paper}>
            <Menu style={{ width: '100%' }}>
                {data.map(
                    (item, index) =>
                        item && item.to ? (
                            <a
                                style={{ textDecoration: 'none' }}
                                href={item.to}
                                key={index}
                                onClick={handleSelectNav}
                            >
                                <MenuItem
                                    primaryText={item.primaryText}
                                    leftIcon={item.leftIcon}
                                />
                            </a>
                        ) : (
                            React.cloneElement(item.leftIcon, { key: index })
                        )
                )}
            </Menu>
        </Paper>
    );
};

const mapStateToProps = (state: any) => state.commonState;

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators<any>(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentLinks);
