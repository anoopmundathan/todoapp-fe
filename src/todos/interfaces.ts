export interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

export interface TodoState {
    items: Todo[];
    loading: boolean;
    name?: string;
}

