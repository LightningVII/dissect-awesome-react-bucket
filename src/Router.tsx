import * as React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import MainHeader from './pages/layout/header';
import MainFooter from './pages/layout/footer';
// import Layout from './pages/layout';
import ContentsLink from './pages/links';
import ListExampleSettings from './pages/list';
import SwipeableBanners from './pages/main';

const IndexRouter = () => (
  <Router>
    <div>
      <Route path="/" component={MainHeader} />
      <Route path="/" component={MainFooter} />
      <Switch>
        <Route exact path="/" component={SwipeableBanners} />
        <Route path="/list" component={ListExampleSettings} />
        <Route path="/links" component={ContentsLink} />
      </Switch>
    </div>
  </Router>
);

export default IndexRouter;
