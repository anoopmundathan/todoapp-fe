import React from "react";
import TodoListItem from "../containers/TodoListItem";
import { Todo } from "../interfaces";

export interface TodoListProps {
    todos: Todo[];
}

type Props = TodoListProps;

export const TodoList = ({ todos }: Props) => {
    
    const renderTodoListItem = () => todos.map((todo: Todo) => <TodoListItem key={todo.id} todo={todo} />);

    return (
        <div className="Todo-List">
            <ul>
                {renderTodoListItem()}
            </ul>
        </div>
    )
}
