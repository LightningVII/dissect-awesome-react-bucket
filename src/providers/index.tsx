import * as React from 'react';
import UIProvider from './UIProvider';
import ReduxProvider from './ReduxProvider';

const Provider = (props: any) => {
    return (
        <ReduxProvider>
            <UIProvider>
                {props.children}
            </UIProvider>
        </ReduxProvider>
    )
}

export default Provider;
