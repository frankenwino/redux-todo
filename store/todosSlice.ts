import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockedToDos, Todo } from "../data";
import { addTodo } from "./todoActions";

const todosSlice = createSlice({
  name: "todos",
  initialState: mockedToDos,
  reducers: {
    addTodoOptimistically: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    toggleCompleteToDo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodoOptimistically, toggleCompleteToDo } = todosSlice.actions;
