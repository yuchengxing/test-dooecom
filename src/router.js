import React from "react";
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from "./mould/home.js";
import About from "./mould/about.js";
import News from "./mould/news.js";

export default class router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
        </Switch>
      </HashRouter>
    );
  }
}
