import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  // Added react-router-dom just in case
  <Router>
    <>
      <Switch>
        {/*  If more routes the below segment must be last */}
        {/* ---------------------------------------------- */}
        <Route path="/" exact={true}>
          {/* App.js staying for now till .jsx page is avaliable */}
          <App />
        </Route>
        {/* ---------------------------------------------- */}
      </Switch>
    </>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
