import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Branches from './components/Branches';
import Browser from './components/Browser';
import Homepage from './components/Homepage';
import Wechat from './components/Wechat';
import Wifi from './components/Wifi';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/browser/">
          <Helmet>
            <title>星端电竞 - 浏览器首页</title>
          </Helmet>
          <Browser />
        </Route>
        <Route exact path="/wechat/">
          <Helmet>
            <title>星端电竞 - 微信公众号</title>
          </Helmet>
          <Wechat />
        </Route>
        <Route exact path="/branches/">
          <Helmet>
            <title>星端电竞 - 分店信息</title>
          </Helmet>
          <Branches />
        </Route>
        <Route exact path="/wifi/">
          <Helmet>
            <title>星端电竞 - 店内无线网</title>
          </Helmet>
          <Wifi />
        </Route>
        <Route exact path="/">
          <Helmet>
            <title>星端电竞 - 等你来战！</title>
          </Helmet>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('app'),
);
