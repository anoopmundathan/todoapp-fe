import React from "react";
import styled from "styled-components";
import TodoListItem from "../containers/TodoListItem";
import { Todo } from "../interfaces";

const TodoListContainer = styled.div`
`;

const UList = styled.ul`
    list-style: none;
    padding: 0;
`;


export interface TodoListProps {
    todos: Todo[];
}

type Props = TodoListProps;

export const TodoList = ({ todos }: Props) => {
    
    const renderTodoListItem = () => todos.map((todo: Todo) => <TodoListItem key={todo.id} todo={todo} />);

    return (
        <TodoListContainer>
            <UList>
                {renderTodoListItem()}
            </UList>
        </TodoListContainer>
    )
}
