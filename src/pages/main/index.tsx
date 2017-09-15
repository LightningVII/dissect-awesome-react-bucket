import * as React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { view as Todos } from '../todos';
import { view as Filter } from '../filter';
const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff'
    },
    slide1: {
        backgroundColor: '#FEA900'
    },
    slide2: {
        backgroundColor: '#B3DC4A'
    },
    slide3: {
        backgroundColor: '#6AC0FF'
    }
};

class SwipeableBanners extends React.Component<any, any> {
    state = {
        index: 0
    };
    handleChange = (value: any, event: any) => {
        this.setState({
            index: value
        });
    }
    handleChangeIndex = (index: any) => {
        this.setState({
            index
        });
    }
    render() {
        const { index } = this.state;

        return (
            <div>
                <Tabs value={index} onChange={this.handleChange}>
                    <Tab label="tab n°1" value={0} />
                    <Tab label="tab n°2" value={1} />
                    <Tab label="tab n°3" value={2} />
                </Tabs>
                <SwipeableViews
                    index={index}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <div>
                        <Todos />
                        <Filter />
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide2)}>
                        slide n°2
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide3)}>
                        slide n°3
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}

export default SwipeableBanners;
