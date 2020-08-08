import { combineReducers } from "redux";
import { TodoState } from "./todos/interfaces";
import todos from "./todos/reducer";

export interface RootState {
    todos: TodoState
}

export default combineReducers({
    todos
});
