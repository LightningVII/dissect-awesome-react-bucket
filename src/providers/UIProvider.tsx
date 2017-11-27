import * as React from 'react';
import '../common/static/icomoon/style.css';
import { MuiThemeProvider } from 'material-ui/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import createContext from '../styles/createContext';
import { withStyles } from 'material-ui/styles';
const context = createContext();

// Apply some reset
const decorate = withStyles(theme => ({
    '@global': {
        html: {
            background: theme.palette.background.default,
            WebkitFontSmoothing: 'antialiased', // Antialiasing.
            MozOsxFontSmoothing: 'grayscale' // Antialiasing.
        },
        body: {
            margin: 0
        }
    }
}));

const AppWrapper = decorate<{ children: JSX.Element }>(props => props.children);

const UIProvider = (props: any) => (
    <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
        <MuiThemeProvider
            theme={context.theme}
            sheetsManager={context.sheetsManager}
        >
            <AppWrapper>{props.children}</AppWrapper>
        </MuiThemeProvider>
    </JssProvider>
);

export default UIProvider;
