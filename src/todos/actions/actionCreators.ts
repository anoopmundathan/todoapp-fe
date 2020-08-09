import { Dispatch } from 'redux';
import { addNewTodoApi, getAllTodosApi, updateTodoApi } from "../api";
import { Todo } from "../interfaces";
import { ActionTypeKeys } from "./actionTypes";

export interface FetchTodos {
    type: ActionTypeKeys.FETCH_TODOS;
}

export const fetchTodos = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: ActionTypeKeys.FETCH_TODOS });
        getAllTodosApi()
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
        addNewTodoApi(newTodo)
        .then(() => {
            getAllTodosApi()
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

export interface UpdateTodo {
    type: ActionTypeKeys.UPDATE_TODO;
}


export const updateTodo = (id: number) => {
    return (dispatch: Dispatch) => {
        updateTodoApi(id)
        .then(() => {
            getAllTodosApi()
            .then(res => dispatch(fetchTodosSuccess(res)))
            .catch(() => dispatch(fetchTodosFail()));
        })
        .catch(() => dispatch(updateTodoFail()))
    }
}

export interface UpdateTodoFail {
    type: ActionTypeKeys.UPDATE_TODO_FAIL
}

export const updateTodoFail = (): UpdateTodoFail => ({
    type: ActionTypeKeys.UPDATE_TODO_FAIL
});

export type TodoActions = FetchTodos 
    | FetchTodosSuccess 
    | FetchTodosFail
    | AddTodo
    | AddTodoSuccess
    | AddTodoFail
    | UpdateTodo;


