import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Tasks } from "./features/taskList/Tasks";
import { Navigation } from "./common/Navigation";
import { Author } from "./features/author/AuthorPage";
import { TaskPage } from "./features/taskList/TaskPage";
import { toAuthor, toTask, toTaskList } from "./routes";

export const App = () => {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path={toTask()}>
            <TaskPage />
          </Route>
          <Route path={toTaskList()}>
            <Tasks />
          </Route>
          <Route path={toAuthor()}>
            <Author />
          </Route>
          <Route path="/">
            <Redirect to={toTaskList()} />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};
