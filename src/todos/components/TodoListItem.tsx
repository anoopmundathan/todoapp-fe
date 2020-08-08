import React from "react";
import { Todo } from "../interfaces";

interface TodoListItemProps {
    todo: Todo;
}

export const TodoListItem = ({ todo }: TodoListItemProps) => {
    return (
        <li>
            <input type="checkbox" />
            {todo.name}
        </li>
    );
}
