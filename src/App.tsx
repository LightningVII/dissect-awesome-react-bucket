import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import MainHeader from './pages/layout/header';
import MainFooter from './pages/layout/footer';
import MainList from './pages/main/list';

import Actions from './pages/count/actions';
import Paper from 'material-ui/Paper';
import { grey200 } from 'material-ui/styles/colors';

const logo = require('./images/logo.svg');

const Root: any = styled.main`text-align: center;`;

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo: any = styled.img`
    animation: ${AppLogoSpin} infinite 20s linear;
    height: 40px;
    width: 40px;
    margin-top: 6px;
`;

const BgColor: any = styled.section`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${grey200};
    z-index: -1;
`;

class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.actions.fetchCountRequested();
        this.props.actions.decrement({ caption: 'First', count: 5 });
    }
    render() {
        return (
            <Root>
                <BgColor />
                <Paper
                    style={{
                        padding: 10,
                        backgroundColor: 'transparent',
                        position: 'relative'
                    }}
                    zDepth={0}
                >
                    <MainHeader />
                    <AppLogo src={logo} alt="logo" />
                    <Paper
                        style={{ position: 'relative', marginBottom: '56px' }}
                        zDepth={2}
                    >
                        <MainList />
                    </Paper>
                </Paper>
                <MainFooter />
            </Root>
        );
    }
}

const mapStateToProps = (state: any) => state.countState;

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators<any>(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
