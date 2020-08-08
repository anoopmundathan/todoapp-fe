import { Dispatch } from 'redux';
import { getAllTodos } from "../api";
import { Todo } from "../interfaces";
import { ActionTypeKeys } from "./actionTypes";

export interface FetchTodos {
    type: ActionTypeKeys.FETCH_TODOS
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
    type: ActionTypeKeys.FETCH_TODOS_SUCCESS,
    payload: Todo[]
}

export const fetchTodosSuccess = (payload: Todo[]): FetchTodosSuccess => ({
    type: ActionTypeKeys.FETCH_TODOS_SUCCESS,
    payload
})

export interface FetchTodosFail {
    type: ActionTypeKeys.FETCH_TODOS_FAIL
}

export const fetchTodosFail = (): FetchTodosFail => ({
    type: ActionTypeKeys.FETCH_TODOS_FAIL
})

export type TodoActions = FetchTodos 
    | FetchTodosSuccess 
    | FetchTodosFail;



