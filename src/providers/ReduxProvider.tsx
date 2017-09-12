'use strict';
import * as React from 'react';
import {Provider} from 'react-redux';
import configureStore from './stores'
const store = configureStore()
const ReduxProvider = (props: any) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default ReduxProvider;
