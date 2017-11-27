import * as React from 'react';
import UIProvider from './UIProvider';
import ReduxProvider from './ReduxProvider';
import { wrapDisplayName } from 'recompose';

const provider = (BaseComponent: React.ComponentType) => {
    class WithRoot extends React.Component {
        componentDidMount() {
            // Remove the server-side injected CSS.
            const jssStyles = document.querySelector('#jss-server-side');
            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }

        render() {
            return (
                <ReduxProvider>
                    <UIProvider>
                        <BaseComponent />
                    </UIProvider>
                </ReduxProvider>
            );
        }
    }

    if (process.env.NODE_ENV !== 'production') {
        (WithRoot as any).displayName = wrapDisplayName(
            BaseComponent,
            'withRoot'
        );
    }

    return WithRoot;
};

export default provider;
