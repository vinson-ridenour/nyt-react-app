import React from "react";
import ReactDOM from "react-dom";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';


// const history = createHistory()


const App = () =>
  <Router history={browserHistory}>
	<div>
		<Navbar />
		<Route exact path="/" component={Main} />
	</div>
  </Router>
;

export default App;