import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import MainHeader from './pages/layout/header';
import MainFooter from './pages/layout/footer';
// import ContentsLink from './pages/links';
// import ListExampleSettings from './pages/list';
// import SwipeableBanners from './pages/main';
// import { view as Count } from './pages/count';

const IndexRouter = () => (
    <Router>
        <div>
            {/* <Route exact path="/" component={MainHeader} /> */}
            <Route exact path="/" component={MainFooter} />
            {/* 
            <Switch>
                <Route exact path="/" component={SwipeableBanners} />
                <Route path="/list" component={ListExampleSettings} />
                <Route path="/links" component={ContentsLink} />
                <Route path="/count" component={Count} />
            </Switch> */}
        </div>
    </Router>
);

export default IndexRouter;
