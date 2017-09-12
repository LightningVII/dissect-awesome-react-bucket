import * as React from "react";

import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import ContentsLink from "./components/ContentsLink";
import ListExampleSettings from "./components/List";
import SwipeableBanners from "./components/SwipeableBanners";
import { BrowserRouter as Router, Route  } from "react-router-dom";

const IndexRouter = () => (
  <Router>
    <div>
      {/* exact */}
      <Route path="/" component={MainHeader} />
      <Route path="/" component={MainFooter} />
      {/* <Switch> */}
      <Route exact path="/" component={SwipeableBanners} />
      <Route path="/list" component={ListExampleSettings} />
      <Route path="/links" component={ContentsLink} />
      {/* </Switch> */}
    </div>
  </Router>
);

export default IndexRouter;
