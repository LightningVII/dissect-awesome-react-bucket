import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Immutable from 'immutable';
import shallowEqual from './shallowEqual';
import registerServiceWorker from './registerServiceWorker';

class A extends React.PureComponent<any, any> {
  index = 0;
  // shouldComponentUpdate (nextProps: any, nextState: any) {
  //   return !shallowEqual(this.props, nextProps);
  // }
  
  render() {
    return (
      <div>
        A: {this.props.data.text}{this.index += 1}
      </div>
    );
  }
}

class B extends React.PureComponent<any, any> {
  index = 0;
  // shouldComponentUpdate (nextProps: any, nextState: any) {
  //   console.log('isEquality', Immutable.is(Immutable.fromJS(this.props), Immutable.fromJS(nextProps)));
  //   return !Immutable.is(Immutable.fromJS(this.props), Immutable.fromJS(nextProps));
  // }
  render() {
    return (
      <div>
        B: {this.props.data.text}{this.index += 1}
      </div>
    );
  }
}

class C extends React.Component<any, any> {
  index = 0;
  shouldComponentUpdate (nextProps: any, nextState: any) {
    return !shallowEqual(this.props, nextProps);
  }
  render() {
    return (
      <div>
        C: {this.props.data.get('text').get('show')}{this.index += 1}
      </div>
    );
  }
}

let defaultValue = Immutable.fromJS({
  A: 'A',
  B: {text: {show: 'B'}, nm: 232},
  C: 'C'
});

class Main extends React.Component<any, any> {
  state = {
    data: defaultValue,
    b: {text: 'B', nm: 232},
    a: {text: 'A', other: {text: ''}}
  };
  index = 0;
  componentDidMount() {
    // setTimeout(
    //   () => {
    //     this.setState({
    //       a: {text: 'A'}
    //     });
    //   },
    //   2000
    // );
    // setTimeout(
    //   () => {
    //     this.setState({
    //       b: {text: 'B'}
    //     });
    //   },
    //   2000
    // );
    // setTimeout(
    //   () => {
    //     this.setState({
    //       b: {text: 'B'}
    //     });
    //   },
    //   3000
    // );
    setTimeout(
      () => {
        this.setState(({ data }) => ({
            data: data.setIn(['B', 'text', 'show'], 'B')
        }));
      },
      2000
    );
    // setTimeout(
    //   () => {
    //     this.setState(({ data }) => ({
    //         data: data.setIn(['B', 'text', 'show'], 'updateB')
    //     }));
    //   },
    //   4000
    // );
    // setTimeout(
    //   () => {
    //     this.setState(({ data }) => ({
    //         data: data.setIn(['B', 'text', 'show'], 'updateB')
    //     }));
    //   },
    //   5000
    // );
  }

  render() {
    // console.log(this.state.data.get('C'))
    // const bprops = Immutable.fromJS({
    //   data: this.state.data.get('B')
    // });
    return (
      <div className="App">
        {'parent render times:'}{this.index += 1}
        <A data={this.state.a} />
        <B data={this.state.b} />
        <C data={this.state.data.get('B')} />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
