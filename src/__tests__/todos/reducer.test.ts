import { FetchTodos, FetchTodosSuccess } from "../../todos/actions/actionCreators";
import { ActionTypeKeys } from "../../todos/actions/actionTypes";
import { Todo, TodoState } from "../../todos/interfaces";
import todoReducer from "../../todos/reducer";

const todos: Todo[] = [
    { id: 1, name: 'one', completed: false },
    { id: 2, name: 'two', completed: false },
    { id: 3, name: 'three', completed: false }
];

const createTodoState = (): TodoState => ({
    items: [],
    loading: false,
})

describe("Reducer test", () => {
    it("should update loading state", () => {
        // Given
        const state: TodoState = createTodoState();
        const action: FetchTodos = { type: ActionTypeKeys.FETCH_TODOS };
        // When
        const result = todoReducer(state, action);
        const expected: TodoState = { ...createTodoState(), loading: true };
        // Then
        expect(result).toEqual(expected);
    });

    it("should return state with all todos", () => {
        // Given
        const state: TodoState = createTodoState();
        const action: FetchTodosSuccess = { type: ActionTypeKeys.FETCH_TODOS_SUCCESS, payload: todos };
        // When
        const result = todoReducer(state, action);
        const expected: TodoState = { ...createTodoState(), items: todos };
        // Then
        expect(result).toEqual(expected);
    });

})