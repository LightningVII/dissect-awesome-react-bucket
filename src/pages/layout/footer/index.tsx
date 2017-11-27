import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../../../common/actions';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import BottomNavigation, {
    BottomNavigationButton
} from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';
import Styles from './style';

class LabelBottomNavigation extends React.Component<
    WithStyles<keyof typeof Styles>
> {
    state = {
        value: 'recents'
    };

    handleChange = (event: any, value: any) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                className={classes.root}
            >
                <BottomNavigationButton
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon />}
                />
                <BottomNavigationButton
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationButton
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon />}
                />
                <BottomNavigationButton
                    label="Folder"
                    value="folder"
                    icon={<FolderIcon />}
                />
            </BottomNavigation>
        );
    }
}

const mapStateToProps = (state: any) => state;

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators<any>(Actions, dispatch)
});

export default withStyles(Styles)(
    connect(mapStateToProps, mapDispatchToProps)(LabelBottomNavigation)
);
