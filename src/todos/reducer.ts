import { Todo } from "./interfaces";

const initialTodos: Todo[] = [
    { id: 1, name: "one", completed: false },
    { id: 2, name: "two", completed: false },
    { id: 3, name: "three", completed: true },
]

export default (state: Todo[] = initialTodos, action: any): Todo[] => {
    return state;
}
