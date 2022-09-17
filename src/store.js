import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { taskListSaga } from "./features/taskList/taskListSaga";
import taskListReducer from "./features/taskList/taskListSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(taskListSaga);

export default store;
