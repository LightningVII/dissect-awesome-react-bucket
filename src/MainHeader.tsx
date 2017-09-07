import * as React from 'react';
import DrawerUndocked from './DrawerUndocked';
import MainAppBar from './MainAppBar';

const MainHeader = () => (
    <section>
        <MainAppBar />
        <DrawerUndocked />
    </section>
)

export default MainHeader