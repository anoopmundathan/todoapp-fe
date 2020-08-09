import { TodoActions } from "./actions/actionCreators";
import { ActionTypeKeys } from "./actions/actionTypes";
import { Todo, TodoState } from "./interfaces";

const initialTodos: Todo[] = [
    { id: 1, name: "one", completed: false },
    { id: 2, name: "two", completed: false },
    { id: 3, name: "three", completed: true },
];

const initialState: TodoState = {
    loading: false,
    items: initialTodos
}

export default (state: TodoState = initialState, action: TodoActions): TodoState => {
    switch (action.type) {
        case ActionTypeKeys.FETCH_TODOS:
            return {
                ...state,
                loading: true
            };
        case ActionTypeKeys.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
