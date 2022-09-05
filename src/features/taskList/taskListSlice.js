import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    taskList: [],
    visibilityOfFinishedTasks: true,
  },
  reducers: {
    addTask: ({ taskList }, { payload }) => {
      taskList.push(payload);
    },
    toggleVisibility: state => {
      state.visibilityOfFinishedTasks = !state.visibilityOfFinishedTasks;
    },
    toggleTaskDone: ({ taskList }, { payload }) => {
      const index = taskList.findIndex(({ id }) => id === payload);
      taskList[index].status = !taskList[index].status;
    },
    removeTask: ({ taskList }, { payload }) => {
      const index = taskList.findIndex(({ id }) => id === payload);
      taskList = taskList.splice(index, 1);
    },
    finishAllTasks: ({ taskList }) => {
      taskList.forEach(task => task.status = true);
    },
  }
});

export const { addTask, toggleVisibility, toggleTaskDone, removeTask, finishAllTasks } = taskListSlice.actions;
export const selectTasks = state => state.taskList;
export default taskListSlice.reducer;