export interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

export interface RootState {
    todos: Todo[];
}
