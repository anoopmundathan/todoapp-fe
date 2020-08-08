import React, { FC, useEffect } from "react";
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

export interface TodoAppDispatchProps {
    fetchTodos: () => void;
}

type Props = TodoAppProps & TodoAppDispatchProps;
export const TodoApp: FC<Props> = ({
    todos,
    fetchTodos
}: Props) => {

    useEffect(() => {
        fetchTodos()
    }, []);
    
    return (
        <TodoAppContainer>
           <TodoForm />
           <TodoList todos={todos} />
        </TodoAppContainer>
    );
} 