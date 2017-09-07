import * as React from 'react'
// import App from './App'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const IndexRouter = () => (
  <Router>
    <div>
      {/* exact */}
      <Route path="/" component={MainHeader} />
      <Route path="/about" component={MainFooter} />
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于</Link></li>
        <li><Link to="/topics">主题列表</Link></li>
      </ul>
      {/* <Route exact path="/" component={App} /> */}
      <Route path="/" component={MainFooter} />
      <Route path="/about" component={MainHeader} />
    </div>
  </Router>
)

export default IndexRouter