import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, type PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toDoReducer from "./toDoSlice";

const rootReducer = combineReducers({
  toDos: toDoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
  key: "To-Do",
  storage,
  whitelist: ["toDos"],
};

export default persistReducer<RootState>(persistConfig, rootReducer);
