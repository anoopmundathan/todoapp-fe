import React from "react";
import { Todo } from "../interfaces";

export interface TodoListItemProps {
    todo: Todo;
}

export interface TodoListItemDispatchProps {
    change: (id: number) => void;
}

type Props = TodoListItemProps & TodoListItemDispatchProps;

export const TodoListItem = ({ todo, change }: Props) => {
    
    const handleChange = () => {
        change(todo.id);
    }

    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={handleChange} />
            {todo.name}
        </li>
    );
}
