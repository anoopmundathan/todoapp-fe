import React, { FC, useEffect } from "react";
import styled from "styled-components";
import TodoForm from "../containers/TodoForm";
import TodoList from "../containers/TodoList";

const TodoAppContainer = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export interface TodoAppDispatchProps {
    fetchTodos: () => void;
}

type Props = TodoAppDispatchProps;

export const TodoApp: FC<Props> = ({ fetchTodos }: Props) => {

    useEffect(() => {
        fetchTodos()
    }, []);
    
    return (
        <TodoAppContainer>
           <TodoForm />
           <TodoList />
        </TodoAppContainer>
    );
} 
