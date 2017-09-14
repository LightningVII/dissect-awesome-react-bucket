import * as React from 'react';
import MainHeader from './header';
import MainFooter from './footer';

const Layout = (props: { children: {} }) => (
    <main>
        <MainHeader {...props} />
        {props.children}
        <MainFooter {...props} />
    </main>
);

export default Layout;
