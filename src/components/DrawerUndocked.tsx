import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from './actions/Common.actions';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from './style/common';

const DrawerUndocked = (props: any) => {
  const handleClose = () => {
    props.actions.setMenuState({ open: false })
  }
  return (
    <div>
      <Drawer
        docked={false}
        width={200}
        open={props.menu.open}
        onRequestChange={handleClose}
      >
        <Link to="/about"><MenuItem onClick={handleClose}>Menu Item</MenuItem></Link>
        <Link to="/"><MenuItem onClick={handleClose}>Menu Item 2</MenuItem></Link>
      </Drawer>
    </div>
  )
};

const mapStateToProps = (state: any) => state.commonState;

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators<any>(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerUndocked);