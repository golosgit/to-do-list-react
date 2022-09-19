import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Tasks } from "./features/taskList/Tasks";
import { Navigation } from "./common/Navigation";
import { Author } from "./features/author/Author";

export const App = () => {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/lista-zadan">
            <Tasks />
          </Route>
          <Route path="/o-autorze">
            <Author />
          </Route>
          <Route path="/">
            <Redirect to="/lista-zadan" />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};
