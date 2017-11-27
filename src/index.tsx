import * as React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import withStyles from 'material-ui/styles/withStyles';
import provider from './providers';
import IndexRouter from './Router';

const styles = {
    root: {
        textAlign: 'center',
        paddingTop: 200
    }
};

const Index = provider(withStyles(styles)<{}>(IndexRouter));

render(<Index />, document.querySelector('#root'));

registerServiceWorker();