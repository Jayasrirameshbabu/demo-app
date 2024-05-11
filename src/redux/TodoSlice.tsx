import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import uuid from 'react-native-uuid';
import {Todo} from '../types/types';

type TodoState = Todo[];

const initialState: TodoState = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: uuid.v4().toString(),
        name: action.payload,
        createdAt: new Date().toISOString(),
        isDone: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const result = state.filter(todo => todo.id !== action.payload);
      return result;
    },

    toggleIsDone: (state, action: PayloadAction<string>) => {
      const todo = state.find(item => item.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    editTodo: (
      state,
      action: PayloadAction<{todoId: string; name: string}>,
    ) => {
      const todo = state.find(item => item.id === action.payload);

      if (todo) {
        todo.name = action.payload.name;
      }
      return [...state];
    },
    todoUpdate: (
      state,
      action: PayloadAction<{todoId: string; name: string}>,
    ) => {
      const {todoId, name} = action.payload;
      const existingTodo = state.find(todo => todo.id === todoId);
      if (existingTodo) {
        existingTodo.name = name;
      }
    },
  },
});

export default todoSlice.reducer;

export const {addNewTodo, deleteTodo, toggleIsDone, editTodo, todoUpdate} =
  todoSlice.actions;
export const Todos = (state: RootState) => state;
