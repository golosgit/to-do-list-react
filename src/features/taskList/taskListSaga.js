import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";
import { fetchExampleTaskList, selectTaskList, setTaskList } from "./taskListSlice";
import { getExampleTaskList } from "./getExampleTaskList";
import { saveTaskListInLocalStorage } from "./taskListLocalStorage";

function* fetchExampleTaskListHandler() {
  try {
    const exampleTaskList = yield call(getExampleTaskList);
    yield put(setTaskList(exampleTaskList));
  } catch (error) {
    yield call(alert, "Error");
  }
}

function* saveTaskListInLocalStorageHandler() {
  const taskList = yield select(selectTaskList);
  yield call(saveTaskListInLocalStorage, taskList);
}

export function* taskListSaga() {
  yield takeLatest(fetchExampleTaskList.type, fetchExampleTaskListHandler);
  yield takeEvery("*", saveTaskListInLocalStorageHandler);
}
