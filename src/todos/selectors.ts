import { RootState } from "../rootReducer";
import { Todo } from "./interfaces";

export const getTodos = (state: RootState): Todo[] => state.todos.items;

export const getLoading = (state: RootState): boolean => state.todos.loading;

