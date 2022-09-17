import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTaskList, setTaskList } from "./taskListSlice";
import { getExampleTaskList } from "./getExampleTaskList";

function* fetchExampleTaskListHandler() {
  try {
    const exampleTaskList = yield call(getExampleTaskList);
    yield put(setTaskList(exampleTaskList));
  } catch (error) {
    yield call(alert, "Error");
  }
}

export function* watchFetchExampleTaskList() {
  yield takeEvery(fetchExampleTaskList.type, fetchExampleTaskListHandler);
}
