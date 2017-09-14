import * as React from 'react';
import DrawerUndocked from './view/DrawerUndocked';
import MainAppBar from './view/MainAppBar';

/* const MainHeader = (props: {}) => (
    <section>
        <MainAppBar />
        <DrawerUndocked />
    </section>
); */

class MainHeader extends React.Component<any, any> {
    render() {
        return (
            <section>
                <MainAppBar />
                <DrawerUndocked />
            </section>
        );
    }
}

export default MainHeader;
