import { Dispatch } from 'redux';
import { addNewTodo, getAllTodos } from "../api";
import { Todo } from "../interfaces";
import { ActionTypeKeys } from "./actionTypes";

export interface FetchTodos {
    type: ActionTypeKeys.FETCH_TODOS;
}

export const fetchTodos = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: ActionTypeKeys.FETCH_TODOS });
        getAllTodos()
        .then(res => dispatch(fetchTodosSuccess(res)))
        .catch(() => dispatch(fetchTodosFail()));
    }
}

export interface FetchTodosSuccess {
    type: ActionTypeKeys.FETCH_TODOS_SUCCESS;
    payload: Todo[];
}

export const fetchTodosSuccess = (payload: Todo[]): FetchTodosSuccess => ({
    type: ActionTypeKeys.FETCH_TODOS_SUCCESS,
    payload
})

export interface FetchTodosFail {
    type: ActionTypeKeys.FETCH_TODOS_FAIL;
}

export const fetchTodosFail = (): FetchTodosFail => ({
    type: ActionTypeKeys.FETCH_TODOS_FAIL
})

export interface AddTodo {
    type: ActionTypeKeys.ADD_TODO;
    payload: string;
}

export const addTodo = (newTodo: string) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: ActionTypeKeys.ADD_TODO });
        addNewTodo(newTodo)
        .then(() => {
            getAllTodos()
            .then(res => dispatch(fetchTodosSuccess(res)))
            .catch(() => dispatch(fetchTodosFail()));
        })
        .catch(() => dispatch(addTodoFail()))
    }
}

export interface AddTodoSuccess {
    type: ActionTypeKeys.ADD_TODO_SUCCESS;
}

export const addTodoSuccess = (): AddTodoSuccess => ({
    type: ActionTypeKeys.ADD_TODO_SUCCESS
});

export interface AddTodoFail {
    type: ActionTypeKeys.ADD_TODO_FAIL;
}

export const addTodoFail = (): AddTodoFail => ({
    type: ActionTypeKeys.ADD_TODO_FAIL
});

export type TodoActions = FetchTodos 
    | FetchTodosSuccess 
    | FetchTodosFail
    | AddTodo
    | AddTodoSuccess
    | AddTodoFail;

