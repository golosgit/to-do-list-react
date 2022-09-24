import { createSlice } from "@reduxjs/toolkit";
import { getTaskListFromLocalStorage } from "./taskListLocalStorage";

const taskListSlice = createSlice({
  name: "taskListState",
  initialState: {
    taskList: getTaskListFromLocalStorage(),
    visibilityOfFinishedTasks: true,
    loading: false,
  },
  reducers: {
    addTask: ({ taskList }, { payload: task }) => {
      taskList.push(task);
    },
    toggleVisibility: (state) => {
      state.visibilityOfFinishedTasks = !state.visibilityOfFinishedTasks;
    },
    toggleTaskDone: ({ taskList }, { payload: taskId }) => {
      const index = taskList.findIndex(({ id }) => id === taskId);
      taskList[index].status = !taskList[index].status;
    },
    removeTask: ({ taskList }, { payload: taskId }) => {
      const index = taskList.findIndex(({ id }) => id === taskId);
      taskList = taskList.splice(index, 1);
    },
    finishAllTasks: ({ taskList }) => {
      taskList.forEach((task) => (task.status = true));
    },
    fetchExampleTaskList: state => {
      state.loading = true;
    },
    fetchExampleTaskListSuccess: (state, { payload: taskList }) => {
      state.taskList = taskList;
      state.loading = false;
    },
    fetchExampleTaskListError: state => {
      state.loading = false;
    },
    removeAllTasks: ({taskList}) => {
      taskList = taskList.splice(0);
    },
  },
});

export const { 
  addTask, 
  toggleVisibility, 
  toggleTaskDone, 
  removeTask, 
  finishAllTasks, 
  fetchExampleTaskList,
  fetchExampleTaskListSuccess,
  fetchExampleTaskListError,
  removeAllTasks
} = taskListSlice.actions;

const selectTaskListState = state => state.taskList;

export const selectTaskList = state => selectTaskListState(state).taskList;
export const selectVisibilityOfFinishedTasks = state => selectTaskListState(state).visibilityOfFinishedTasks;
export const selectTaskListLength = state => selectTaskList(state).length;
export const selectIsEveryTaskDone = state => selectTaskList(state).every(({ status }) => status);
export const selectLoadingState = state => selectTaskListState(state).loading;

export const getTaskById = (state, taskId) => 
  selectTaskList(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const taskList = selectTaskList(state);

  if(!query || query.trim() === null){
    return taskList;
  }
  
  return taskList.filter(({content}) => content.toUpperCase().includes(query.toUpperCase().trim()));
}

export default taskListSlice.reducer;
