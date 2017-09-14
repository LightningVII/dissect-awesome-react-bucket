import * as React from 'react';
const bottomTear = require('./bottom-tear.svg');

class MobileTearSheet extends React.Component<any, any> {
  static PropTypes = {
    children: React.PropTypes.node,
    height: React.PropTypes.number.isRequired
  };

  static defaultProps = {
    height: 500
  };

  static contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  };

  render() {
    const { prepareStyles } = this.context.muiTheme;

    const styles = {
      root: {
        // marginBottom: 24,
        // marginRight: 24,
        maxWidth: 360,
        width: '100%'
      },
      container: {
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none',
        height: this.props.height,
        overflow: 'hidden'
      },
      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        maxWidth: 360
      }
    };

    return (
      <div style={prepareStyles(styles.root)}>
        <div style={prepareStyles(styles.container)}>{this.props.children}</div>
        <img
          style={prepareStyles(styles.bottomTear)}
          src={bottomTear}
        />
      </div>
    );
  }
}

export default MobileTearSheet;
