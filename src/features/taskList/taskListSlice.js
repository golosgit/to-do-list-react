import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
  name: 'taskListState',
  initialState: {
    taskList: [],
    visibilityOfFinishedTasks: true,
  },
  reducers: {
    addTask: ({ taskList }, { payload: task }) => {
      taskList.push(task);
    },
    toggleVisibility: state => {
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
      taskList.forEach(task => task.status = true);
    },
  }
});

export const {
  addTask,
  toggleVisibility,
  toggleTaskDone,
  removeTask,
  finishAllTasks
} = taskListSlice.actions;

const selectTaskListState = state => state.taskList;

export const selectTaskList = state => selectTaskListState(state).taskList;
export const selectVisibilityOfFinishedTasks = state => selectTaskListState(state).visibilityOfFinishedTasks;
export const selectTaskListLength = state => selectTaskList(state).length;
export const selectIsEveryTaskDone = state => selectTaskList(state).every(({ status }) => status);

export default taskListSlice.reducer;