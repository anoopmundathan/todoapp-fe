import { RootState } from "../../rootReducer";
import { Todo } from "../../todos/interfaces";
import { getLoading, getTodos } from "../../todos/selectors";

const todos: Todo[] = [
    { id: 1, name: 'one', completed: false },
    { id: 2, name: 'two', completed: false },
    { id: 3, name: 'three', completed: false }
];

const createState = (): RootState => ({
    todos: {
        items: todos,
        loading: true,
    }
})

describe("Selector test", () => {
    it("should return all todos using getTodos function", () => {
        // Given
        const state = createState();

        // When
        const result = getTodos(state);
        // Then
        expect(result).toBe(todos);
    });

    it("should return loading using getLoading function", () => {
        // Given
        const state = createState();

        // When
        const result = getLoading(state);
        // Then
        expect(result).toBe(state.todos.loading);
    })
})