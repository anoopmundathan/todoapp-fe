import React, { FC } from "react";
import styled from "styled-components";
import { Todo } from "../interfaces";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const TodoAppContainer = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export interface TodoAppProps {
    todos: Todo[];
}

export const TodoApp: FC<TodoAppProps> = ({
    todos
}: TodoAppProps) => {
    return (
        <TodoAppContainer>
           <TodoForm />
           <TodoList todos={todos} />
        </TodoAppContainer>
    );
} 