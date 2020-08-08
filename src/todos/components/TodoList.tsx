import React from "react";
import { Todo } from "../interfaces";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
    todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
    
    return (
        <div className="Todo-List">
            <ul>
                {todos.map((todo: Todo) => <TodoListItem todo={todo} />)}
            </ul>
        </div>
    )
}
