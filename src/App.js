import React from "react";
import { Tasks } from "./features/taskList/Tasks";
import { Navigation } from "./common/Navigation";

export const App = () => {
  return (
    <>
      <Navigation />
      <Tasks />
    </>
  );
};
