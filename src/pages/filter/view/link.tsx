import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import Actions from '../actions';

const Link = ({ active, children, onClick }: any) => {
    if (active) {
        return <RaisedButton primary label={children} />;
    } else {
        return (
            <FlatButton primary label={children} onClick={onClick} />
        );
    }
};
const mapStateToProps = (state: any, ownProps: any) => ({
    active: state.filterState === ownProps.filter
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onClick: () => {
        dispatch(Actions.setFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
