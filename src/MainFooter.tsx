import * as React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const homeIcon = <FontIcon className="icon-home"></FontIcon>;
const cloudIcon = <FileCloudDownload />;
const nearbyIcon = <IconLocationOn />;

export default class Footer extends React.Component {
    state = {
        selectedIndex: 0,
    };

    select = (index: any) => this.setState({ selectedIndex: index });
    render() {
        return (
            <footer style={{
                position: 'fixed',
                boxShadow: '0px -3px 4px -2px rgba(0, 0, 0, 0.12)',
                bottom: 0
            }}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
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
        )
    }
}