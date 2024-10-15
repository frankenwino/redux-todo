import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, setDoc } from "firebase/firestore";
import { Todo, TodoCreate } from "../data";
import { db } from "../firebase";

// A simple action with payload
// {type: "add_number", payload: "2"}

// action creator
function addNumber(value: number) {
  return { type: "add_number", payload: value };
}

// action creator with thunk
function addNumberThunk(value: number) {
  return () => {
    // <-- this is the thunk
    // perform async operations here
    return { type: "add_number", payload: value };
  };
}

// Redux toolkit gives us this, which is the same as above
/**
 * Asynchronous thunk action to add a new todo item to the Firestore database.
 *
 * @param {TodoCreate} todo - The todo item to be added, excluding the `completed` status.
 * @returns {Promise<Todo>} A promise that resolves to the newly added todo item, including its Firestore ID and `completed` status set to false.
 */
export const addTodo = createAsyncThunk<Todo, TodoCreate>(
  "todos/add-todo",
  async (todo, thunkAPI) => {
    // Create a new doc with id client side (no await needed)
    const newDocRef = doc(collection(db, "todos"));

    // Prepare our data with an id within
    const todoData = {
      id: newDocRef.id,
      ...todo,
      completed: false,
    };

    // perform async operations here
    // const docRef = await addDoc(collection(db, "todos"), todoData);
    await setDoc(newDocRef, todoData);

    // return the data to the redux store
    return todoData;
  }
);
