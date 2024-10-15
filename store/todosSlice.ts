import { createSlice } from "@reduxjs/toolkit";
import { mockedToDos } from "../data";

const todosSlice = createSlice({
  name: "todos",
  initialState: mockedToDos,
  reducers: {},
});

export const todosReducer = todosSlice.reducer;
export const {} = todosSlice.actions;
