import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      id: 1,
      status: 'pending',
      title: 'Remove Button',
      description:
        'We need a remove button in our task card. Make the button red and use Heroicon for trash bin icon.',
      date: '2023-08-28',
      assign: 'Mir Hussain',
      priority: 'high',
    }
  ],
  UserDefTask:[],
};

const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: 'pending', ...payload });
      } else {
        const lastElement = state.task[state.task.length - 1];
        state.task.push({ id: lastElement.id + 1, status: 'pending', ...payload });
      }
    },

    removeTask: (state, { payload }) => {
      state.task = state.task.filter(item => item.id !== payload);
    },

    updateStatus: (state, { payload }) => {
      const target = state.task.find(item => item.id === payload.id);
      if (target) {
        target.status = payload.status;
      }
    },

    userTask: (state, { payload }) => {
      state.UserDefTask = state.task.filter(item => item.assign == payload
        );
    },
  },
});

export const { addTask, updateStatus, removeTask, userTask } = taskSlice.actions;
export default taskSlice.reducer;
