import * as React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';

const Link = ({ active, children, onClick }: any) => {
    if (active) {
        return <b className="filter selected">{children}</b>;
    } else {
        return (
            <a
                href="#"
                className="filter not-selected"
                onClick={ev => {
                    ev.preventDefault();
                    onClick();
                }}
            >
                {children}
            </a>
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
