import { takeLatest, call, put, takeEvery, select, delay } from "redux-saga/effects";
import { fetchExampleTaskList, fetchExampleTaskListSuccess, fetchExampleTaskListError, selectTaskList } from "./taskListSlice";
import { getExampleTaskList } from "./getExampleTaskList";
import { saveTaskListInLocalStorage } from "./taskListLocalStorage";

function* fetchExampleTaskListHandler() {
  try {
    yield delay(1500);
    const exampleTaskList = yield call(getExampleTaskList);
    yield put(fetchExampleTaskListSuccess(exampleTaskList));
  } catch (error) {
    yield put(fetchExampleTaskListError());
    yield call(alert, "Wystąpił błąd!");
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
