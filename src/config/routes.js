import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import Main from "../components/Main";
import Saved from "../components/Saved";
import Search from "../components/Search";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route exact path="search" component={Search} />
      <Route exact path="saved" component={Saved} />
      {/* <IndexRoute component={Home} /> */}
    </Route>
  </Router>
);

export default routes;