import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockedToDos, Todo } from "../data";

const todosSlice = createSlice({
  name: "todos",
  initialState: mockedToDos,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    toggleCompleteToDo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodo, toggleCompleteToDo } = todosSlice.actions;
