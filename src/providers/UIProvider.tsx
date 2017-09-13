import * as React from 'react';
import '../icomoon/style.css';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { blue500, grey600 } from 'material-ui/styles/colors';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue500
    },
    appBar: {
        textColor: grey600
    }
});

const MyUIProvider = (props: any) => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            {props.children}
        </MuiThemeProvider>
    );
};

export default MyUIProvider;
