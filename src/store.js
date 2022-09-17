import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchFetchExampleTaskList } from "./features/taskList/taskListSaga";
import taskListReducer from "./features/taskList/taskListSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchExampleTaskList);

export default store;
