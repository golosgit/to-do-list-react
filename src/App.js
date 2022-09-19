import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Tasks } from "./features/taskList/Tasks";
import { Navigation } from "./common/Navigation";
import { Author } from "./features/author/AuthorPage";
import { TaskPage } from "./features/taskList/TaskPage";

export const App = () => {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/zadanie/:id">
            <TaskPage />
          </Route>
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
