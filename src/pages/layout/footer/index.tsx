import * as React from 'react';
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../../../common/actions';
import routers from '../../../constants/Routers';
import FontIcon from 'material-ui/FontIcon';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const homeIcon = <FontIcon className="icon-home" />;
const cloudIcon = <FileCloudDownload />;
const nearbyIcon = <IconLocationOn />;

class Footer extends React.Component<any, any> {
  routers = routers;
  select = (index: any) => {
    this.props.actions.setBottomNavState({ selectedIndex: index });
    this.props.history.push(this.routers[index]);
  }
  componentWillMount() {
    const selectedIndex = this.routers.indexOf(
      this.props.history.location.pathname
    );
    this.props.actions.setBottomNavState({ selectedIndex: selectedIndex });
  }
  render() {
    const selectedIndex = this.props.bottomNav.selectedIndex;
    return (
      <footer
        style={{
          position: 'fixed',
          boxShadow: '0px -3px 4px -2px rgba(0, 0, 0, 0.12)',
          bottom: 0,
          zIndex: 1
        }}
      >
        <BottomNavigation selectedIndex={selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Download"
            icon={cloudIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </footer>
    );
  }
}

const mapStateToProps = (state: any) => state.commonState;

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators<any>(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
