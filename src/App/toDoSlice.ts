import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

const toDo = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    initToDo: (_, action: PayloadAction<string[]>) => action.payload,
    addToDo: (currToDos, action: PayloadAction<string>) => {
      currToDos.push(action.payload);
    },
    deleteToDo: (currToDos, action: PayloadAction<number>) => {
      currToDos.splice(action.payload, 1);
    },
  },
});

export default toDo.reducer;
export const { initToDo, addToDo, deleteToDo } = toDo.actions;
