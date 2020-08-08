export interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
}
